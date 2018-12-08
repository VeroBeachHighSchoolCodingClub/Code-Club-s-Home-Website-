const mongoose = require('mongoose');

var ContentH = mongoose.model('hcontent', {
    title: {
        type: String,
        trim: false,
        required: true
    },
    content: {
        type: String,
        trim: false,
        required: true
    }
});

module.exports = {ContentH};