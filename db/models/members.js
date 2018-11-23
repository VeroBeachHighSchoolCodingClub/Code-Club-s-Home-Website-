const mongoose = require('mongoose');

var Member = mongoose.model('member', {
    name: {
        type: String,
        trim: true
    }
});

module.exports = {Member};