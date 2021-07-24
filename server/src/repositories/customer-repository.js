'use strict'

const mongoose = require('mongoose');
const Customer = require('../models/Customer');

exports.create = async(data) => {
    var customer = new Customer(data);
    await customer.save();
}
