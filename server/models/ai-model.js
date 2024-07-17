
const mongoose = require('mongoose');

const aiSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    response: {
        type: Object, 
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const AiData = mongoose.model('AiData', aiSchema);

module.exports = AiData;
