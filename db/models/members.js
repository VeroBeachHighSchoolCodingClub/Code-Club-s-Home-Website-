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
    type: {
        type: String,
        required: true,
        maxlength: 10
    },
    career: {
        type: String,
        trim: false,
        required: true,
        maxlength: 30
    },
    picture: {
        type: String,
        trim: true,
        required: false
    }
});

module.exports = {Member};