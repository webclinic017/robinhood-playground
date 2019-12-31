const { uniq, mapObject } = require('underscore');
const COUNT = 4; // per derivation

const deriveCollections = collections => {

    const allScanResults = uniq(
        Object.values(collections).flatten().filter(t => t.computed),
        result => result.ticker
    );

    strlog({ allScanResults })

    const rsiPerms = {
        realChill: 40,
        chill: 70,
        unfiltered: Number.POSITIVE_INFINITY
    };

    const getUnusualVolume = results => results
        .sort((a, b) => b.computed.projectedVolumeTo2WeekAvg - a.computed.projectedVolumeTo2WeekAvg)
        .slice(0, COUNT);

    const outputVariations = {
        NowhereVolume: results => getUnusualVolume(
            results
                .filter(t => t.computed.tso > -1 && t.computed.tso < 3 && t.computed.tsc > -1 && t.computed.tsc < 3)
        ),
        MoverVolume: results => getUnusualVolume(
            results
                .sort((a, b) => b.computed.tsc - a.computed.tsc)
                .slice(0, results.length / 2)
        ),
        SlightlyUpVolume: results => getUnusualVolume(
            results
                .filter(t => t.computed.dailyRSI < 50)
                .filter(t => t.computed.tso > 1 && t.computed.tsc > 1 && t.computed.tsc < 3)
        ),
        SlightDownVolume: results => getUnusualVolume(
            results
                .filter(t => t.computed.dailyRSI < 50)
                .filter(t => t.computed.tsc < 1 && t.computed.tsc > -3)
        ),
        Movers: results => results
            .sort((a, b) => b.computed.tso - a.computed.tso)
            .slice(0, COUNT),
    };

    const permute = rsiPermName =>
        Object.keys(outputVariations).reduce((acc, variationName) => ({
            ...acc,
            [`${rsiPermName}${variationName}`]: results => {
                const fn = outputVariations[variationName];
                const filteredByRSI = results.filter(t => 
                    t.computed.dailyRSI < rsiPerms[rsiPermName]
                );
                return fn(filteredByRSI);
            }
        }), {});

    const derivedCollections = Object.keys(rsiPerms)
        .reduce((acc, rsiPermName) => ({
            ...acc,
            ...permute(rsiPermName)
        }), {});

    let unusedResults = [
        ...allScanResults.filter(t => t.computed.projectedVolume > 70000)
    ];
    return mapObject(
        derivedCollections,
        fn => {
            const response = fn(unusedResults);
            unusedResults = unusedResults.filter(t => !response.map(t => t.ticker).includes(t.ticker));    // no repeats
            return response;
        }
    );
};


module.exports = deriveCollections;