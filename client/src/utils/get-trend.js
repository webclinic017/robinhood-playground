const getTrend = (val1, val2, noFix) => {
    const changeAmt = Number(val1) - Number(val2);
    const trendPerc = changeAmt / Number(val2) * 100;
    return !noFix ? +(trendPerc.toFixed(2)) : trendPerc;
};

module.exports = getTrend;
