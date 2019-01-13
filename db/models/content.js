const mongoose = require('mongoose');

var Content = mongoose.model('content', {
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

module.exports = {Content};