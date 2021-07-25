'use strict'

const mongoose = require('mongoose');
const Checkout = require('../models/Checkout');

exports.post = async (data) => {
    var checkout = new Checkout(data);
    await checkout.save();
}

exports.get = async () => {
    const res = await Checkout.find();
    console.log(res);
    return res;
}

exports.getById = async (id) => {
    const res = await Checkout.findById(id);
    return res;
}
