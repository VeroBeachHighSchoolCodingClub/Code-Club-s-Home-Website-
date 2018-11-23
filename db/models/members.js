const mongoose = require('mongoose');

var Member = mongoose.model('member', {
    name: {
        type: String,
        trim: false,
        required: true,
        maxlength: 15
    },
    rank: {
        type: String,
        trim: false,
        required: true,
        maxlength: 30
    },
    quote: {
        type: String,
        trim: false,
        required: true,
        maxlength: 200 
    },
    isMajor: {
        type: String,
        required: true
    },
    career: {
        type: String,
        trim: false,
        required: true,
        maxlength: 30
    }
});

module.exports = {Member};