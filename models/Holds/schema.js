const mongoose = require('mongoose');
const { Schema } = mongoose;

const Pick = require('../Pick');

const schema = new Schema({
    ticker: String,
    archived: { type: Boolean, default: false },
    buys: [{
        timestamp: { type : Date, default: Date.now },
        date: String,
        fillPrice: Number,
        quantity: Number,
        strategy: String,
        relatedPick: { type: Schema.Types.ObjectId, ref: 'picks' },
        data: Schema.Types.Mixed
    }],
    sells: [{
        timestamp: { type : Date, default: Date.now },
        date: String,
        fillPrice: Number,
        quantity: Number
    }],
    additionalWords: [String],
    isSelling: { type: Boolean, default: false },
    // point system
    pickPoints: { type: Number, default: 0 },
    mostDownPoints: { type: Number, default: 0 },
    zScorePoints: { type: Number, default: 0 },
    stPoints: { type: Number, default: 0 },
    actOnMultPoints: { type: Number, default: 0 },
    buyTheRedPoints: { type: Number, default: 0 },
});


// statics

schema.statics.registerAlpacaFill = async function(fillData) {
    let {
        ticker,
        alpacaOrder,
        relatedPick
    } = fillData;
    relatedPick = relatedPick || await Pick.getRecentPickForTicker(ticker, true);
    if (!relatedPick) {
        relatedPick = await Pick.getRecentPickForTicker(ticker, false);
    }
    strlog({ relatedPick })
    const strategy = relatedPick ? relatedPick.strategyName : 'manual';
    const newBuy = {
        date: (new Date(alpacaOrder.filled_at)).toLocaleDateString().split('/').join('-'),
        fillPrice: Number(alpacaOrder.filled_avg_price),
        quantity: Number(alpacaOrder.filled_qty),
        strategy,
        relatedPick,
        data: fillData.data
    };
    strlog({ newBuy })
    const HoldDoc = await this.updateOne(
        { ticker },
        { $push: { buys: newBuy } },
        { upsert: true }
    );
    strlog({ HoldDoc });
    return HoldDoc;
};


schema.statics.registerSell = async function(ticker, fillPrice, quantity) {
    return this.findOneAndUpdate(
        { ticker },
        {
            $push: {
                sells: {
                    date: (new Date()).toLocaleDateString().split('/').join('-'),
                    fillPrice,
                    quantity
                }
            }
        },
        { new: true }
    );
};

// methods
schema.methods.closePosition = async function() {
    const data = this.toObject();
    console.log('closing', data);
    const closedPosition = await require('./ClosedPositions').create(data);
    await this.remove();
    console.log('closed position', data.ticker, data);
    return closedPosition;
};

module.exports = schema;
