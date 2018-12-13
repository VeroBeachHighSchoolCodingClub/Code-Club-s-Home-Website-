const mongoose = require('mongoose');

var About = mongoose.model('aboutus', {
    content: {
        type: String,
        trim: false,
        required: true
    }
});

module.exports = {About};