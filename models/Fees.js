const mongoose = require('mongoose')


const FeesSchema = new mongoose.Schema({
    studentName: {
        type: String,
    },
    studentClass: {
        type: String,
    },
    payeeName: {
        type: String,
    },
    payeeMailId: {
        type: String,
        default: null
    },
    submittedFeesAmount: {
        type: String,
    },
    pendingFeesAmount: {
        type: String,
    },
    paymentMode: {
        type: String,
    },
    note: {
        type: String,
        default: null
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

var FeesModel = mongoose.model('feeses',FeesSchema)
module.exports = FeesModel