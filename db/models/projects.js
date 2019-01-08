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
            required: true
        },
        originalname: {
            type: String,
            required: true
        },
        destination: {
            type: String,
            required: true
        },
        filename: {
            type: String,
            required: true
        },
        path: {
            type: String,
            required: true
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