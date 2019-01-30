const mongoose = require('mongoose');

var Member = mongoose.model('member', {
    name: {
        type: String,
        trim: false,
        required: true
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
        required: false,
        maxlength: 200 
    },
    type: {
        type: String,
        required: false,
        maxlength: 10
    },
    career: {
        type: String,
        trim: false,
        required: false,
        maxlength: 30
    },
    leader: {
        type: String,
        required: true
    },
    picture: {
        data: Buffer,
        contentType: String
    }
});

module.exports = {Member};