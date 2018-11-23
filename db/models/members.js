const mongoose = require('mongoose');

var Member = mongoose.model('member', {
    name: {
        type: String
        // trim: true
        // required: true
    }
});

module.exports = {Member};