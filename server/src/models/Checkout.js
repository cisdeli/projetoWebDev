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
    card: [{
        nameOnCard: {
            type: String,
            required: false
        },
        cardNumber: {
            type: Number,
            required: false
        },
        expiration: {
            type: Date,
            required: false
        },
        cvv: {
            type: Number,
            required: false
        }
    }]
})

module.exports = mongoose.model('Checkout', schema);
