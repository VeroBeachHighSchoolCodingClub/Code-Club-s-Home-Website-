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
        required: true,
        trim: true
    },
    url: {
        type: String,
        trim: false,
        required: true,
        maxlength: 50
    },
    dis: {
        type: String,
        trim: false,
        required: true,
        maxlength: 200 
    },
    source: {
        type: String,
        required: true,
        maxlength: 100
    },
    picture: [{
        fieldname: {
            type: String,
            required: false
        },
        originalname: {
            type: String,
            required: false
        },
        destination: {
            type: String,
            required: false
        },
        filename: {
            type: String,
            required: false
        },
        path: {
            type: String,
            required: false
        }
    }],
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