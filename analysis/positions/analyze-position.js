const Pick = require('../../models/Pick');
const { uniq } = require('underscore');

const { sumArray, avgArray } = require('../../utils/array-math');
const getTrend = require('../../utils/get-trend');

const analyzePosition = async position => {
  const { ticker, sells = [], buys = [], unrealizedPl } = position;

  strlog({
    position
  })

  const numSharesSold = sumArray(
      sells.map(buy => buy.quantity)
  );
  const individualize = array => {
      const grouped = array.map(({ quantity, fillPrice }) => 
          (new Array(quantity)).fill(fillPrice)
      );
      // flatten
      return grouped.reduce((acc, arr) => [...acc, ...arr], []);
  };
  const allBuys = individualize(buys);
  const avgEntry = avgArray(allBuys);
  const totalBuyAmt = sumArray(allBuys);

  const allSells = individualize(sells);
  const avgSellPrice = avgArray(allSells);
  const sellReturnPerc = getTrend(avgSellPrice, avgEntry);

  let uniqPickIds = buys.map(buy => buy.relatedPick.toString()).uniq();
  uniqPickIds = uniq(uniqPickIds);
  const numPicks = uniqPickIds.length;

  const relatedPicks = await mapLimit(uniqPickIds, 1, pickId => 
    Pick.findOne({ _id: pickId }).lean()
  );
  const numMultipliers = sumArray(
    relatedPicks.map(pick => pick.multiplier || 1)
  );
  strlog({
    ticker,
    uniqPickIds,
    numMultipliers
  })
  const sellReturnDollars = (numSharesSold / 100) * sellReturnPerc * avgEntry;
  const date = (new Date(relatedPicks[0].timestamp)).toLocaleDateString();
  const allPmsHit = relatedPicks.map(pick => pick.pmsHit).flatten().filter(Boolean).uniq();
  const allStrategiesHit = relatedPicks.map(pick => pick.strategyName).filter(Boolean).uniq();
  const interestingWords = ([
    ...allPmsHit,
    ...allStrategiesHit
  ]).map(pm => pm.split('-')).flatten().uniq();

  const netImpact = Number(sellReturnDollars || 0) + Number(unrealizedPl || 0);
  return {
      // ...position,s
      totalBuyAmt,
      avgEntry,
      avgSellPrice,
      sellReturnPerc,
      sellReturnDollars,
      netImpact,
      impactPerc: +(netImpact / totalBuyAmt * 100).toFixed(2),
      date,
      numPicks,
      numMultipliers,
      interestingWords
  };
};

module.exports = analyzePosition;