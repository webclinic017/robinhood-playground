const getMultipleHistoricals = require('../../app-actions/get-multiple-historicals');
const { avgArray } = require('../../utils/array-math');
const getTrend = require('../../utils/get-trend');

module.exports = async (tickers = ['AAPL']) => {


  let allHistoricals = await getMultipleHistoricals(
      tickers,
      `interval=10minute&bounds=extended`
  );

  let withHistoricals = tickers.map((ticker, i) => ({
      ticker,
      historicals: allHistoricals[i]
  }));

  const withRatio = withHistoricals.map(obj => {
    const { ticker, historicals } = obj;
    const recentHistoricals = historicals.slice(-2);

    const recentDollarVolume = avgArray(
      recentHistoricals
        .map(({ open_price, close_price, high_price, low_price, volume }) =>
          avgArray([
            open_price,
            close_price,
            low_price,
            high_price
          ]) * volume
        )
    );

    const recentTrend = getTrend(recentHistoricals[0].open_price, recentHistoricals[1].close_price);
    const [
      avgRecentVolume,
      avgOverallVolume
    ] = [
      recentHistoricals,
      historicals
    ].map(hists => avgArray(hists.map(hist => hist.volume)));

    return {
      // ...obj,
      ticker,
      avgRecentVolume,
      avgOverallVolume,
      ratio: avgRecentVolume / avgOverallVolume,
      recentTrend,
      recentDollarVolume
    };
  });


  const asObject = withRatio.reduce((acc, { ticker, ...rest }) => ({
    ...acc,
    [ticker]: rest
  }), {});

  
  return asObject;
};