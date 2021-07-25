'use strict'

const mongoose = require("mongoose");

const schema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    cep: {
        type: Number,
        required: true
    },
    nameOnCard: {
        type: String,
        required: true
    },
    cardNumber: {
        type: Number,
        required: true
    },
    expiration: {
        type: String,
        required: true
    },
    cvv: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Checkout', schema);
