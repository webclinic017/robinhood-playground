const mongoose = require('mongoose');
const { Schema } = mongoose;
const Pick = require('./Pick');

const schema = new Schema({
    ticker: String,
    buys: [{
        date: String,
        fillPrice: Number,
        quantity: Number,
        strategy: String,
        relatedPick: { type: Schema.Types.ObjectId, ref: 'picks' },
        data: Schema.Types.Mixed
    }],
    sells: [{
        date: String,
        fillPrice: Number,
        quantity: Number
    }]
});


// statics

schema.statics.registerAlpacaFill = async function(fillData) {
    let {
        ticker,
        alpacaOrder,
        relatedPick
    } = fillData;
    relatedPick = relatedPick || await Pick.getRecentPickForTicker(ticker);
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
    const closedPosition = await ClosedPosition.create(data);
    await this.remove();
    console.log('closed position', data.ticker);
    return closedPosition;
};

const Hold = mongoose.model('Hold', schema, 'holds');
const ClosedPosition = mongoose.model('ClosedPositions', schema, 'closedPositions');
module.exports = Hold;