const mongoose = require('mongoose');

var Project = mongoose.model('projects', {
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 15
    },
    year: {
        type: String,
        maxlength: 4,
        required: true,
        trim: true
    },
    url: {
        type: String,
        trim: false,
        required: true,
        maxlength: 50
    },
    dis1: {
        type: String,
        trim: false,
        required: true,
        maxlength: 200 
    },
    dis2: {
        type: String,
        trim: false,
        required: false,
        maxlength: 200 
    },
    dis3: {
        type: String,
        trim: false,
        required: false,
        maxlength: 200 
    },
    source: {
        type: String,
        required: true,
        maxlength: 100
    },
    picture: {
        type: String,
        trim: false,
        required: true,
        maxlength: 30
    },
    alt: {
        type: String,
        required: false,
        maxlength: 15
    },
    margin: {
        type: Number,
        required: true
    },
    id: {
        type: Number,
        required: true
    }
});

module.exports = {Project};