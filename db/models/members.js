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
    picture: [{
        fieldname: {
            type: String,
            required: false
        },
        originalname: {
            type: String,
            required: false
        },
        encoding: {
            type: String,
            required: false
        },
        mimetype: {
            type: String,
            required: false
        },
        destination: {
            type: String,
            required: false
        },
        filename: {
            type: String,
            required: false
        },
        path: {
            type: String,
            required: false
        },
        size: {
            type: Number,
            required: false
        }
    }]
});

module.exports = {Member};