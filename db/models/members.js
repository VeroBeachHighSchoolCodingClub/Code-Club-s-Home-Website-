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
            required: true
        },
        originalname: {
            type: String,
            required: true
        },
        encoding: {
            type: String,
            required: true
        },
        mimetype: {
            type: String,
            required: true
        },
        destination: {
            type: String,
            required: true
        },
        filename: {
            type: String,
            required: true
        },
        path: {
            type: String,
            required: true
        },
        size: {
            type: Number,
            required: true
        },
        data: {
            type: Buffer,
            required: true
        }
    }]
});

module.exports = {Member};