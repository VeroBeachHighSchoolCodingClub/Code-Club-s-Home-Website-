const mongoose = require('mongoose');

var ContactH = mongoose.model('hcontact', {
    content: {
        type: String,
        trim: false,
        required: true
    }
});

module.exports = {ContactH};