const allTickerWatchers = [
    "ticker-watchers-under1-shouldWatchout-minorJump-initial-5000",
    "ticker-watchers-under1-shouldWatchout-minorJump-initial-failedHistorical-5000",
    "ticker-watchers-under1-shouldWatchout-minorJump-brunch-5000",
    "ticker-watchers-under1-shouldWatchout-minorJump-brunch-failedHistorical-5000",
    "ticker-watchers-under1-shouldWatchout-minorJump-lunch-5000",
    "ticker-watchers-under1-shouldWatchout-minorJump-lunch-failedHistorical-5000",
    "ticker-watchers-under1-shouldWatchout-minorJump-dinner-5000",
    "ticker-watchers-under1-shouldWatchout-minorJump-dinner-failedHistorical-5000",
    "ticker-watchers-under1-shouldWatchout-majorJump-initial-5000",
    "ticker-watchers-under1-shouldWatchout-majorJump-initial-failedHistorical-5000",
    "ticker-watchers-under1-shouldWatchout-majorJump-brunch-5000",
    "ticker-watchers-under1-shouldWatchout-majorJump-brunch-failedHistorical-5000",
    "ticker-watchers-under1-shouldWatchout-majorJump-lunch-5000",
    "ticker-watchers-under1-shouldWatchout-majorJump-lunch-failedHistorical-5000",
    "ticker-watchers-under1-shouldWatchout-majorJump-dinner-5000",
    "ticker-watchers-under1-shouldWatchout-majorJump-dinner-failedHistorical-5000",
    "ticker-watchers-under1-shouldWatchout-initial-5000",
    "ticker-watchers-under1-shouldWatchout-initial-failedHistorical-5000",
    "ticker-watchers-under1-shouldWatchout-brunch-5000",
    "ticker-watchers-under1-shouldWatchout-brunch-failedHistorical-5000",
    "ticker-watchers-under1-shouldWatchout-lunch-5000",
    "ticker-watchers-under1-shouldWatchout-lunch-failedHistorical-5000",
    "ticker-watchers-under1-shouldWatchout-dinner-5000",
    "ticker-watchers-under1-shouldWatchout-dinner-failedHistorical-5000",
    "ticker-watchers-under1-notWatchout-minorJump-initial-5000",
    "ticker-watchers-under1-notWatchout-minorJump-initial-failedHistorical-5000",
    "ticker-watchers-under1-notWatchout-minorJump-brunch-5000",
    "ticker-watchers-under1-notWatchout-minorJump-brunch-failedHistorical-5000",
    "ticker-watchers-under1-notWatchout-minorJump-lunch-5000",
    "ticker-watchers-under1-notWatchout-minorJump-lunch-failedHistorical-5000",
    "ticker-watchers-under1-notWatchout-minorJump-dinner-5000",
    "ticker-watchers-under1-notWatchout-minorJump-dinner-failedHistorical-5000",
    "ticker-watchers-under1-notWatchout-majorJump-initial-5000",
    "ticker-watchers-under1-notWatchout-majorJump-initial-failedHistorical-5000",
    "ticker-watchers-under1-notWatchout-majorJump-brunch-5000",
    "ticker-watchers-under1-notWatchout-majorJump-brunch-failedHistorical-5000",
    "ticker-watchers-under1-notWatchout-majorJump-lunch-5000",
    "ticker-watchers-under1-notWatchout-majorJump-lunch-failedHistorical-5000",
    "ticker-watchers-under1-notWatchout-majorJump-dinner-5000",
    "ticker-watchers-under1-notWatchout-majorJump-dinner-failedHistorical-5000",
    "ticker-watchers-under1-notWatchout-initial-5000",
    "ticker-watchers-under1-notWatchout-initial-failedHistorical-5000",
    "ticker-watchers-under1-notWatchout-brunch-5000",
    "ticker-watchers-under1-notWatchout-brunch-failedHistorical-5000",
    "ticker-watchers-under1-notWatchout-lunch-5000",
    "ticker-watchers-under1-notWatchout-lunch-failedHistorical-5000",
    "ticker-watchers-under1-notWatchout-dinner-5000",
    "ticker-watchers-under1-notWatchout-dinner-failedHistorical-5000",
    "ticker-watchers-under5-shouldWatchout-minorJump-initial-5000",
    "ticker-watchers-under5-shouldWatchout-minorJump-initial-failedHistorical-5000",
    "ticker-watchers-under5-shouldWatchout-minorJump-brunch-5000",
    "ticker-watchers-under5-shouldWatchout-minorJump-brunch-failedHistorical-5000",
    "ticker-watchers-under5-shouldWatchout-minorJump-lunch-5000",
    "ticker-watchers-under5-shouldWatchout-minorJump-lunch-failedHistorical-5000",
    "ticker-watchers-under5-shouldWatchout-minorJump-dinner-5000",
    "ticker-watchers-under5-shouldWatchout-minorJump-dinner-failedHistorical-5000",
    "ticker-watchers-under5-shouldWatchout-majorJump-initial-5000",
    "ticker-watchers-under5-shouldWatchout-majorJump-initial-failedHistorical-5000",
    "ticker-watchers-under5-shouldWatchout-majorJump-brunch-5000",
    "ticker-watchers-under5-shouldWatchout-majorJump-brunch-failedHistorical-5000",
    "ticker-watchers-under5-shouldWatchout-majorJump-lunch-5000",
    "ticker-watchers-under5-shouldWatchout-majorJump-lunch-failedHistorical-5000",
    "ticker-watchers-under5-shouldWatchout-majorJump-dinner-5000",
    "ticker-watchers-under5-shouldWatchout-majorJump-dinner-failedHistorical-5000",
    "ticker-watchers-under5-shouldWatchout-initial-5000",
    "ticker-watchers-under5-shouldWatchout-initial-failedHistorical-5000",
    "ticker-watchers-under5-shouldWatchout-brunch-5000",
    "ticker-watchers-under5-shouldWatchout-brunch-failedHistorical-5000",
    "ticker-watchers-under5-shouldWatchout-lunch-5000",
    "ticker-watchers-under5-shouldWatchout-lunch-failedHistorical-5000",
    "ticker-watchers-under5-shouldWatchout-dinner-5000",
    "ticker-watchers-under5-shouldWatchout-dinner-failedHistorical-5000",
    "ticker-watchers-under5-notWatchout-minorJump-initial-5000",
    "ticker-watchers-under5-notWatchout-minorJump-initial-failedHistorical-5000",
    "ticker-watchers-under5-notWatchout-minorJump-brunch-5000",
    "ticker-watchers-under5-notWatchout-minorJump-brunch-failedHistorical-5000",
    "ticker-watchers-under5-notWatchout-minorJump-lunch-5000",
    "ticker-watchers-under5-notWatchout-minorJump-lunch-failedHistorical-5000",
    "ticker-watchers-under5-notWatchout-minorJump-dinner-5000",
    "ticker-watchers-under5-notWatchout-minorJump-dinner-failedHistorical-5000",
    "ticker-watchers-under5-notWatchout-majorJump-initial-5000",
    "ticker-watchers-under5-notWatchout-majorJump-initial-failedHistorical-5000",
    "ticker-watchers-under5-notWatchout-majorJump-brunch-5000",
    "ticker-watchers-under5-notWatchout-majorJump-brunch-failedHistorical-5000",
    "ticker-watchers-under5-notWatchout-majorJump-lunch-5000",
    "ticker-watchers-under5-notWatchout-majorJump-lunch-failedHistorical-5000",
    "ticker-watchers-under5-notWatchout-majorJump-dinner-5000",
    "ticker-watchers-under5-notWatchout-majorJump-dinner-failedHistorical-5000",
    "ticker-watchers-under5-notWatchout-initial-5000",
    "ticker-watchers-under5-notWatchout-initial-failedHistorical-5000",
    "ticker-watchers-under5-notWatchout-brunch-5000",
    "ticker-watchers-under5-notWatchout-brunch-failedHistorical-5000",
    "ticker-watchers-under5-notWatchout-lunch-5000",
    "ticker-watchers-under5-notWatchout-lunch-failedHistorical-5000",
    "ticker-watchers-under5-notWatchout-dinner-5000",
    "ticker-watchers-under5-notWatchout-dinner-failedHistorical-5000",
    "ticker-watchers-under10-shouldWatchout-minorJump-initial-5000",
    "ticker-watchers-under10-shouldWatchout-minorJump-initial-failedHistorical-5000",
    "ticker-watchers-under10-shouldWatchout-minorJump-brunch-5000",
    "ticker-watchers-under10-shouldWatchout-minorJump-brunch-failedHistorical-5000",
    "ticker-watchers-under10-shouldWatchout-minorJump-lunch-5000",
    "ticker-watchers-under10-shouldWatchout-minorJump-lunch-failedHistorical-5000",
    "ticker-watchers-under10-shouldWatchout-minorJump-dinner-5000",
    "ticker-watchers-under10-shouldWatchout-minorJump-dinner-failedHistorical-5000",
    "ticker-watchers-under10-shouldWatchout-majorJump-initial-5000",
    "ticker-watchers-under10-shouldWatchout-majorJump-initial-failedHistorical-5000",
    "ticker-watchers-under10-shouldWatchout-majorJump-brunch-5000",
    "ticker-watchers-under10-shouldWatchout-majorJump-brunch-failedHistorical-5000",
    "ticker-watchers-under10-shouldWatchout-majorJump-lunch-5000",
    "ticker-watchers-under10-shouldWatchout-majorJump-lunch-failedHistorical-5000",
    "ticker-watchers-under10-shouldWatchout-majorJump-dinner-5000",
    "ticker-watchers-under10-shouldWatchout-majorJump-dinner-failedHistorical-5000",
    "ticker-watchers-under10-shouldWatchout-initial-5000",
    "ticker-watchers-under10-shouldWatchout-initial-failedHistorical-5000",
    "ticker-watchers-under10-shouldWatchout-brunch-5000",
    "ticker-watchers-under10-shouldWatchout-brunch-failedHistorical-5000",
    "ticker-watchers-under10-shouldWatchout-lunch-5000",
    "ticker-watchers-under10-shouldWatchout-lunch-failedHistorical-5000",
    "ticker-watchers-under10-shouldWatchout-dinner-5000",
    "ticker-watchers-under10-shouldWatchout-dinner-failedHistorical-5000",
    "ticker-watchers-under10-notWatchout-minorJump-initial-5000",
    "ticker-watchers-under10-notWatchout-minorJump-initial-failedHistorical-5000",
    "ticker-watchers-under10-notWatchout-minorJump-brunch-5000",
    "ticker-watchers-under10-notWatchout-minorJump-brunch-failedHistorical-5000",
    "ticker-watchers-under10-notWatchout-minorJump-lunch-5000",
    "ticker-watchers-under10-notWatchout-minorJump-lunch-failedHistorical-5000",
    "ticker-watchers-under10-notWatchout-minorJump-dinner-5000",
    "ticker-watchers-under10-notWatchout-minorJump-dinner-failedHistorical-5000",
    "ticker-watchers-under10-notWatchout-majorJump-initial-5000",
    "ticker-watchers-under10-notWatchout-majorJump-initial-failedHistorical-5000",
    "ticker-watchers-under10-notWatchout-majorJump-brunch-5000",
    "ticker-watchers-under10-notWatchout-majorJump-brunch-failedHistorical-5000",
    "ticker-watchers-under10-notWatchout-majorJump-lunch-5000",
    "ticker-watchers-under10-notWatchout-majorJump-lunch-failedHistorical-5000",
    "ticker-watchers-under10-notWatchout-majorJump-dinner-5000",
    "ticker-watchers-under10-notWatchout-majorJump-dinner-failedHistorical-5000",
    "ticker-watchers-under10-notWatchout-initial-5000",
    "ticker-watchers-under10-notWatchout-initial-failedHistorical-5000",
    "ticker-watchers-under10-notWatchout-brunch-5000",
    "ticker-watchers-under10-notWatchout-brunch-failedHistorical-5000",
    "ticker-watchers-under10-notWatchout-lunch-5000",
    "ticker-watchers-under10-notWatchout-lunch-failedHistorical-5000",
    "ticker-watchers-under10-notWatchout-dinner-5000",
    "ticker-watchers-under10-notWatchout-dinner-failedHistorical-5000",
    "ticker-watchers-under15-shouldWatchout-minorJump-initial-5000",
    "ticker-watchers-under15-shouldWatchout-minorJump-initial-failedHistorical-5000",
    "ticker-watchers-under15-shouldWatchout-minorJump-brunch-5000",
    "ticker-watchers-under15-shouldWatchout-minorJump-brunch-failedHistorical-5000",
    "ticker-watchers-under15-shouldWatchout-minorJump-lunch-5000",
    "ticker-watchers-under15-shouldWatchout-minorJump-lunch-failedHistorical-5000",
    "ticker-watchers-under15-shouldWatchout-minorJump-dinner-5000",
    "ticker-watchers-under15-shouldWatchout-minorJump-dinner-failedHistorical-5000",
    "ticker-watchers-under15-shouldWatchout-majorJump-initial-5000",
    "ticker-watchers-under15-shouldWatchout-majorJump-initial-failedHistorical-5000",
    "ticker-watchers-under15-shouldWatchout-majorJump-brunch-5000",
    "ticker-watchers-under15-shouldWatchout-majorJump-brunch-failedHistorical-5000",
    "ticker-watchers-under15-shouldWatchout-majorJump-lunch-5000",
    "ticker-watchers-under15-shouldWatchout-majorJump-lunch-failedHistorical-5000",
    "ticker-watchers-under15-shouldWatchout-majorJump-dinner-5000",
    "ticker-watchers-under15-shouldWatchout-majorJump-dinner-failedHistorical-5000",
    "ticker-watchers-under15-shouldWatchout-initial-5000",
    "ticker-watchers-under15-shouldWatchout-initial-failedHistorical-5000",
    "ticker-watchers-under15-shouldWatchout-brunch-5000",
    "ticker-watchers-under15-shouldWatchout-brunch-failedHistorical-5000",
    "ticker-watchers-under15-shouldWatchout-lunch-5000",
    "ticker-watchers-under15-shouldWatchout-lunch-failedHistorical-5000",
    "ticker-watchers-under15-shouldWatchout-dinner-5000",
    "ticker-watchers-under15-shouldWatchout-dinner-failedHistorical-5000",
    "ticker-watchers-under15-notWatchout-minorJump-initial-5000",
    "ticker-watchers-under15-notWatchout-minorJump-initial-failedHistorical-5000",
    "ticker-watchers-under15-notWatchout-minorJump-brunch-5000",
    "ticker-watchers-under15-notWatchout-minorJump-brunch-failedHistorical-5000",
    "ticker-watchers-under15-notWatchout-minorJump-lunch-5000",
    "ticker-watchers-under15-notWatchout-minorJump-lunch-failedHistorical-5000",
    "ticker-watchers-under15-notWatchout-minorJump-dinner-5000",
    "ticker-watchers-under15-notWatchout-minorJump-dinner-failedHistorical-5000",
    "ticker-watchers-under15-notWatchout-majorJump-initial-5000",
    "ticker-watchers-under15-notWatchout-majorJump-initial-failedHistorical-5000",
    "ticker-watchers-under15-notWatchout-majorJump-brunch-5000",
    "ticker-watchers-under15-notWatchout-majorJump-brunch-failedHistorical-5000",
    "ticker-watchers-under15-notWatchout-majorJump-lunch-5000",
    "ticker-watchers-under15-notWatchout-majorJump-lunch-failedHistorical-5000",
    "ticker-watchers-under15-notWatchout-majorJump-dinner-5000",
    "ticker-watchers-under15-notWatchout-majorJump-dinner-failedHistorical-5000",
    "ticker-watchers-under15-notWatchout-initial-5000",
    "ticker-watchers-under15-notWatchout-initial-failedHistorical-5000",
    "ticker-watchers-under15-notWatchout-brunch-5000",
    "ticker-watchers-under15-notWatchout-brunch-failedHistorical-5000",
    "ticker-watchers-under15-notWatchout-lunch-5000",
    "ticker-watchers-under15-notWatchout-lunch-failedHistorical-5000",
    "ticker-watchers-under15-notWatchout-dinner-5000",
    "ticker-watchers-under15-notWatchout-dinner-failedHistorical-5000",
    "ticker-watchers-under20-shouldWatchout-minorJump-initial-5000",
    "ticker-watchers-under20-shouldWatchout-minorJump-initial-failedHistorical-5000",
    "ticker-watchers-under20-shouldWatchout-minorJump-brunch-5000",
    "ticker-watchers-under20-shouldWatchout-minorJump-brunch-failedHistorical-5000",
    "ticker-watchers-under20-shouldWatchout-minorJump-lunch-5000",
    "ticker-watchers-under20-shouldWatchout-minorJump-lunch-failedHistorical-5000",
    "ticker-watchers-under20-shouldWatchout-minorJump-dinner-5000",
    "ticker-watchers-under20-shouldWatchout-minorJump-dinner-failedHistorical-5000",
    "ticker-watchers-under20-shouldWatchout-majorJump-initial-5000",
    "ticker-watchers-under20-shouldWatchout-majorJump-initial-failedHistorical-5000",
    "ticker-watchers-under20-shouldWatchout-majorJump-brunch-5000",
    "ticker-watchers-under20-shouldWatchout-majorJump-brunch-failedHistorical-5000",
    "ticker-watchers-under20-shouldWatchout-majorJump-lunch-5000",
    "ticker-watchers-under20-shouldWatchout-majorJump-lunch-failedHistorical-5000",
    "ticker-watchers-under20-shouldWatchout-majorJump-dinner-5000",
    "ticker-watchers-under20-shouldWatchout-majorJump-dinner-failedHistorical-5000",
    "ticker-watchers-under20-shouldWatchout-initial-5000",
    "ticker-watchers-under20-shouldWatchout-initial-failedHistorical-5000",
    "ticker-watchers-under20-shouldWatchout-brunch-5000",
    "ticker-watchers-under20-shouldWatchout-brunch-failedHistorical-5000",
    "ticker-watchers-under20-shouldWatchout-lunch-5000",
    "ticker-watchers-under20-shouldWatchout-lunch-failedHistorical-5000",
    "ticker-watchers-under20-shouldWatchout-dinner-5000",
    "ticker-watchers-under20-shouldWatchout-dinner-failedHistorical-5000",
    "ticker-watchers-under20-notWatchout-minorJump-initial-5000",
    "ticker-watchers-under20-notWatchout-minorJump-initial-failedHistorical-5000",
    "ticker-watchers-under20-notWatchout-minorJump-brunch-5000",
    "ticker-watchers-under20-notWatchout-minorJump-brunch-failedHistorical-5000",
    "ticker-watchers-under20-notWatchout-minorJump-lunch-5000",
    "ticker-watchers-under20-notWatchout-minorJump-lunch-failedHistorical-5000",
    "ticker-watchers-under20-notWatchout-minorJump-dinner-5000",
    "ticker-watchers-under20-notWatchout-minorJump-dinner-failedHistorical-5000",
    "ticker-watchers-under20-notWatchout-majorJump-initial-5000",
    "ticker-watchers-under20-notWatchout-majorJump-initial-failedHistorical-5000",
    "ticker-watchers-under20-notWatchout-majorJump-brunch-5000",
    "ticker-watchers-under20-notWatchout-majorJump-brunch-failedHistorical-5000",
    "ticker-watchers-under20-notWatchout-majorJump-lunch-5000",
    "ticker-watchers-under20-notWatchout-majorJump-lunch-failedHistorical-5000",
    "ticker-watchers-under20-notWatchout-majorJump-dinner-5000",
    "ticker-watchers-under20-notWatchout-majorJump-dinner-failedHistorical-5000",
    "ticker-watchers-under20-notWatchout-initial-5000",
    "ticker-watchers-under20-notWatchout-initial-failedHistorical-5000",
    "ticker-watchers-under20-notWatchout-brunch-5000",
    "ticker-watchers-under20-notWatchout-brunch-failedHistorical-5000",
    "ticker-watchers-under20-notWatchout-lunch-5000",
    "ticker-watchers-under20-notWatchout-lunch-failedHistorical-5000",
    "ticker-watchers-under20-notWatchout-dinner-5000",
    "ticker-watchers-under20-notWatchout-dinner-failedHistorical-5000"
];

const onlyQuality = s => !s.includes('failedHistorical') && !s.includes('minorJump');

const TWgoodWatchouts = allTickerWatchers.filter(s => s.includes('shouldWatchout')).filter(onlyQuality);
const TWgoodNotWatchouts = allTickerWatchers.filter(s => s.includes('notWatchout')).filter(onlyQuality);
const TWallWatchout = allTickerWatchers.filter(s => s.includes('shouldWatchout'));
const TWallNotWatchout = allTickerWatchers.filter(s => s.includes('notWatchout'));

const TWminorJumps = allTickerWatchers.filter(s => s.includes('minorJump') && !s.includes('failedHistorical'));
const TWmajorJumps = allTickerWatchers.filter(s => s.includes('majorJump') && !s.includes('failedHistorical'));
const TWmajorJumpsNotWatchouts = TWallNotWatchout.filter(s => s.includes('majorJump') && !s.includes('failedHistorical'));
const TWfailedHistorical = allTickerWatchers.filter(s => s.includes('failedHistorical'));


const TWgoodInitial = allTickerWatchers.filter(s => s.includes('initial'));
const TWgoodbrunch = allTickerWatchers.filter(s => s.includes('brunch'));
const TWgoodLunch = allTickerWatchers.filter(s => s.includes('lunch'));
const TWgoodDinner = allTickerWatchers.filter(s => s.includes('dinner'));



// final filters
const onlyMyDollars = s => s.includes('under1-') || s.includes('under5');
const noEarlyWatchouts = s => !(s.includes('shouldWatchout') && s.includes('initial'));
const onlyLaters = s => s.includes('lunch') || s.includes('dinner');

const myTickerWatchersInitial = [
    ...TWmajorJumpsNotWatchouts,
    ...TWgoodNotWatchouts,
    ...TWgoodNotWatchouts
].filter(onlyMyDollars);


// my addons

const myLaters = [
    ...new Set(
        myTickerWatchersInitial
            .filter(onlyLaters)
            .filter(onlyMyDollars)
    )
];

const tenAndFifteenLaters = TWallNotWatchout   /// WOW
    .filter(s => s.includes('under10') || s.includes('under15'))
    .filter(onlyQuality)
    .filter(onlyLaters);

const spicySenoritas = [
    'ticker-watchers-under15-notWatchout-initial-5000',
    'ticker-watchers-under15-notWatchout-brunch-5000',
];

const mySuperBoosters = [
    'ticker-watchers-under5-notWatchout-brunch-5000',
    'ticker-watchers-under1-notWatchout-brunch-5000'
];

const myAddOns = [   
    // last minute add-ons
    ...myLaters,
    ...myLaters,
    ...spicySenoritas,
    ...tenAndFifteenLaters,
    ...mySuperBoosters
];

const myTickerWatchers = myTickerWatchersInitial         // with spice!
    .concat(myAddOns)   // because we want the extra power!
    .filter(noEarlyWatchouts);


module.exports = {
    allTickerWatchers,

    // should watchout not watchout
    TWgoodWatchouts,
    TWgoodNotWatchouts,
    TWallWatchout,
    TWallNotWatchout,

    // based on jump
    TWminorJumps,
    TWmajorJumps,
    TWmajorJumpsNotWatchouts,

    // etc
    TWfailedHistorical,

    // time
    TWgoodInitial,
    TWgoodbrunch,
    TWgoodLunch,
    TWgoodDinner,

    // going for the gold
        myTickerWatchersInitial,
        myAddOns,
            myLaters,
            tenAndFifteenLaters,
            spicySenoritas,     // flare
            mySuperBoosters,    // flare


        myTickerWatchers,    
};