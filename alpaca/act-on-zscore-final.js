const getPositions = require('./get-positions');
const { alpaca } = require('.');
const { partition, pick } = require('underscore');
const { sumArray, zScore } = require('../utils/array-math');
const sellPosition = require('./sell-position');
const cancelAllOrders = require('./cancel-all-orders');
const attemptBuy = require('./attempt-buy');
const getMinutesFromOpen = require('../utils/get-minutes-from-open');
const limitBuyMultiple = require('../app-actions/limit-buy-multiple');
const lookup = require('../utils/lookup');
const Hold = require('../models/Holds');
const { disableActOnZscore } = require('../settings');

module.exports = async () => {

  const { onlyUseCash, actOnStPercent } = await getPreferences();

  if (disableActOnZscore) return log('act on zscore disabled');
  
  const account = await alpaca.getAccount();
  let amtToSpend = Number(account.equity * actOnStPercent / 100);

  if (onlyUseCash) {
    amtToSpend *= 0.6;
    const maxDollarsToSpendAllowed = Number(account.cash) / 2;
    amtToSpend = Math.min(maxDollarsToSpendAllowed, amtToSpend);
  }
  
  if (amtToSpend <= 4) {
    return log('not enough money to act on zscore');
  }

  strlog({ account})


  const positions = await getPositions();


  await log('ACTONZSCOREFINAL', {
    positions: positions
      .sort((a, b) => Number(b.zScoreFinal) - Number(a.zScoreFinal))
      .map(p => ({
        ...p,
        bullBearScore: (p.stSent || {}).bullBearScore
      }))
      .map(p => pick(p, ['ticker', 'market_value', 'returnPerc', 'bullBearScore', 'zScoreFinal']))
  })


  const toBuy = positions
    .filter(p => p.scan)
    .filter(p => (
      p.zScoreFinal > 2 ||
      p.zScoreSum > 15
    ))
  const label = ps => ps.map(p => p.ticker).join(', ');

  const totalValue = sumArray(
    toBuy.map(p => Number(p.market_value)).filter(Boolean)
  );

  const dollarsToBuyPerStock = Math.ceil(amtToSpend / 3.5);
  await log(`ACTONZSCOREFINAL: $${amtToSpend} total - ${label(toBuy)}`, {
    toBuy,
    totalValue,
    amtToSpend,
    dollarsToBuyPerStock
  });
  for (let position of toBuy) {
    const { ticker, currentPrice, zScoreFinal, zScoreSum, wouldBeDayTrade, interestingWords = [] } = position;
    if (!wouldBeDayTrade) {
      await log(`ZSCORE FLIPPING ${ticker}`); 
    }
    await cancelAllOrders(ticker, 'sell');
    const { currentPrice: pickPrice } = await lookup(ticker);
    const MAX_MULT = 4;
    const multiplier = Math.max(1, Math.min(MAX_MULT, Math.ceil(zScoreFinal) + Math.floor(zScoreSum / 8)));
    let totalAmtToSpend = Math.round(dollarsToBuyPerStock * multiplier);


    if (interestingWords.includes('overnight')) {
      totalAmtToSpend = totalAmtToSpend / 2;
    } else if (interestingWords.includes('sudden')) {
      totalAmtToSpend = totalAmtToSpend * 1.2;
    }


    // interesting....
    const quantity = Math.ceil(totalAmtToSpend / pickPrice);
    await log(`ACTONZSCOREFINAL buying ${ticker} about $${totalAmtToSpend} around ${pickPrice}`, {
      ticker,
      quantity,
      multiplier,
    });
    await Hold.updateOne(
      { ticker},
      { $inc: { zScorePoints: Math.round(totalAmtToSpend) } }
    );
    limitBuyMultiple({
      totalAmtToSpend,
      strategy: 'ACTONZSCOREFINAL',
      withPrices: [{
        ticker,
        price: pickPrice
      }]
    });
    // attemptBuy({
    //   ticker,
    //   quantity,
    //   pickPrice: currentPrice,
    //   fallbackToMarket: true
    // });
  }



};