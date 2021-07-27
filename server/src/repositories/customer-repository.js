'use strict'

const mongoose = require('mongoose');
const Customer = require('../models/Customer');

exports.create = async (data) => {
    var customer = new Customer(data);
    const findEmail = await Customer.findOne({
        email: data.email
    });
    if (findEmail != null) {
        return null;
    }
    await customer.save();
}

exports.authenticate = async (data) => {
    const res = await Customer.findOne({
        email: data.email,
        password: data.password
    });
    return res;
}

exports.get = async () => {
    const res = await Customer.find();
    console.log(res);
    return res;
}

exports.getById = async (id) => {
    const res = await Customer.findById(id);
    return res;
}

exports.update = async (id, body, file) => {
    const query = {};

    if (body.name) {
        query.name = body.name;
    }
    if (body.email) {
        query.email = body.email;
        const findEmail = await Customer.findOne({
            email: body.email
        });
        if (findEmail != null) {
            return null;
        }
    }

    if (body.password) {
        query.password = body.password;
    }

    // Updating image if there is one
    // if (file) {
    //     let imageId = file.filename;
    //     query.image = {
    //         id: imageId,
    //         url: `src/public/uploads/customers/${imageId}`
    //     };
    //     const user = await Customer.findById(id, 'image');
    //
    //     // Remove the old image from the upload folder
    //     if (user.image) {
    //         const path = user.image.url;
    //         fs.unlinkSync(path);
    //     }
    // }

    const res = await Customer.findByIdAndUpdate(id, query);
    return res;
}

exports.updateAdmin = async (email, value) => {
    const query = {
        email: email
    };

    let update;
    const res1 = await Customer.find(query, 'roles');
    if (res1.length === 0) {
        return null;
    }

    if (res1[0].roles[0] === 'user') {
        update = {
            roles: 'admin'
        };
    } else {
        update = {
            roles: 'user'
        };
    }

    const res2 = await Customer.findOneAndUpdate(query, update);
    return res2;
}

exports.delete = async (id) => {
    return await Customer.findByIdAndRemove(id);
}
