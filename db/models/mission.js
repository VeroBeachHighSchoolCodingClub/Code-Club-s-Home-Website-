const mongoose = require('mongoose');

var Mission = mongoose.model('mission', {
    content: {
        type: String,
        trim: false,
        required: true
    }
});

module.exports = {Mission};