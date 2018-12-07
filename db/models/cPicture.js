const mongoose = require('mongoose');

var Picture = mongoose.model('cpictures', {
    picture: {
        type: String,
        trim: true,
        required: true
    },
    alt: {
        type: String,
        trim: false,
        required: false,
        maxlenght: 15
    },
    width: {
        type: Number,
        trim: true,
        required: false,
        maxlenght: 4
    },
    height: {
        type: Number,
        trim: true,
        required: false,
        maxlenght: 4
    },
    h3: {
        type: String,
        trim: false,
        required: true,
        maxlenght: 15
    },
    p: {
        type: String,
        trim: false,
        required: true,
        maxlenght: 20
    },
    num: {
        type: Number,
        trim: true,
        maxlength: 2
    },
    active: {
        type: String,
        trim: true,
        required: false,
        maxlenght: 7
    }
});

module.exports = {Picture};