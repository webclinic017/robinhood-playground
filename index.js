const DISABLE_REALTIME = false;




require('./utils/fix-locale-date-string');

// console.log(stocks);
const login = require('./rh-actions/login');
// const initCrons = require('./app-actions/init-crons');
const initModules = require('./app-actions/init-modules');

const getAllTickers = require('./rh-actions/get-all-tickers');
const cancelAllOrders = require('./rh-actions/cancel-all-orders');
const alpacaCancelAllOrders = require('./alpaca/cancel-all-orders');
const logPortfolioValue = require('./app-actions/log-portfolio-value');
// const getPennyStocks = require('./analysis/get-penny-stocks');
// const activeBuy = require('./app-actions/active-buy');
const detailedNonZero = require('./app-actions/detailed-non-zero');

let allTickers;

const regCronIncAfterSixThirty = require('./utils/reg-cron-after-630');
// const rh = require('./shared-async/rh');
const sellAllStocks = require('./app-actions/sell-all-stocks');
// const up10days = require('./strategies/up-10-days');
// const getUpStreak = require('./app-actions/get-up-streak');

const sellAllOlderThanTwoDays = require('./app-actions/sell-all-older-than-two-days');

const mongoose = require('mongoose');
const { mongoConnectionString } = require('./config');

const Pick = require('./models/Pick');
const stocktwits = require('./utils/stocktwits');

const restartProcess = require('./app-actions/restart-process');

const RealtimeRunner = require('./realtime/RealtimeRunner');
const sendEmail = require('./utils/send-email');
const getMinutesFromOpen = require('./utils/get-minutes-from-open');
const { emails } = require('./config');

mongoose.connect(mongoConnectionString, { useNewUrlParser: true, autoIndex: false });

process.on('unhandledRejection', async (reason, p) => {
    if (reason.toString().includes('depende')) return;
    // application specific logging, throwing an error, or other logic here
    const logStr = `Unhandled Rejection at: ${p.toString()}, reason: ${reason}`;
    console.log('we hit an error oh shit');
    console.log({ p, reason: reason.toString(), p: p.toString() });
    await log(`ERROR: unhandledRejection: ${logStr}`);
    await sendEmail('force', 'unhandledRejection', logStr, Object.keys(emails)[1]); // cell phone
    // if (!reason.toString().includes('order_id')) {
        // return restartProcess();
    // }
});

(async () => {


    // setTimeout(restartProcess, 10000);

    
    // console.log(
    //     await Pick.create({
    //         date: '10-4-2018',
    //         strategyName: 'based-on-jump',
    //         min: 20,
    //         picks: [
    //             {
    //                 ticker: 'APPL',
    //                 price: 32.93
    //             },
    //             {
    //                 ticker: 'BPMX',
    //                 price: 3.93
    //             }
    //         ]
    //     })
    // );

    Robinhood = await login();
    global.Robinhood = Robinhood;



    // await cancelAllOrders();         // no dont cancel robinhood
    (await getPreferences()).onlyUseCash && getMinutesFromOpen() < 220 && await alpacaCancelAllOrders();


    await RealtimeRunner.init(DISABLE_REALTIME);
    await require('./socket-server');

    // console.log(await getUpStreak('AAPL', 3));
    // await up10days.trendFilter(require('/Users/johnmurphy/Development/my-stuff/robinhood-playground/json/stock-data/2018-1-22 12:53:02 (+380*).json'));

    // console.log(await getPennyStocks(require('/Users/johnmurphy/Development/my-stuff/robinhood-playground/json/stock-data/2018-1-23 13:04:23 (+391).json')));
    // await logPortfolioValue();
    // does the list of stocks need updating?

    // const detailed = await detailedNonZero();
    // console.log(detailed);
    try {
        allTickers = require('./json/stock-data/allStocks');
        // throw new Error();
    } catch (e) {
        allTickers = await getAllTickers();
    }
    allTickers = allTickers
        .filter(stock => stock.tradeable)
        .map(stock => stock.symbol);

    try {
        await logPortfolioValue();
    } catch (e) {
        console.log(e);
    }


    await initModules();
    console.log(regCronIncAfterSixThirty.toString());

    await log(`playground init'd`);


    // const accounts = await Robinhood.accounts();
    // // const ratioToSpend = Math.max(0.3, getMinutesFromOpen() / 390);
    // const cashAvailable = Number(accounts.results[0].margin_balances.unallocated_margin_cash);
    // console.log({cashAvailable});

    // await sellAllStocks();

    // startCrons();

})();
