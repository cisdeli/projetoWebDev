'use strict'
const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Field Name is required'],
        trim: true
    },
    slug: {
        type: String,
        required: [true, 'Field Slug is required'],
        trim: true,
        index: true,
        unique: [true, 'Field slug must be unique']
    },
    description: {
        type: String,
        required: [true, 'Field Description is required']
    },
    price: {
        type: Number,
        trim: true,
        required: [true, 'Field Price is required']
    },
    active: {
        type: Boolean,
        required: [true, 'Field Active is required'],
        default: true
    },
    quantity: {
        type: Number,
        required: [true, 'Field Quantity is required'],
        default: 1
    },
    image: {
        type: Object
    },
    category: {
        type: String,
        required: true
    },
    tags: [{
        type: String,
        trim: true,
        required: [true, 'Field Tags is required']
    }],
});

module.exports = mongoose.model('Product', schema);
