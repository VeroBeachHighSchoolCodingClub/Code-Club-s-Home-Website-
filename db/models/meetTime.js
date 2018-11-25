const mongoose = require('mongoose');

var MeetTime = mongoose.model('mtime', {
    content: {
        type: String,
        trim: false,
        required: true
    }
});

module.exports = {MeetTime};