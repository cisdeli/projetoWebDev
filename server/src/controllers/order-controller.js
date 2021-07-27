'use strict'

const repository = require('../repositories/order-repository');

exports.checkStock= async (req, res, next) => {
    try {
        let items  = req.body.items;
        const cb = await repository.checkStock(items);
        if(cb === null) {
            next();
        } else  {
            res.status(200).send(cb);
        }
    } catch(err) {
        res.status(500).send({
            message: 'Failed to process requisition',
            err: err.message,
            code: err.code
        });
    }
}


exports.get = async (req, res,  next) => {
    try{
        const data = await repository.get();
        res.status(200).send(data);
    } catch(err) {
        res.status(500).send({
            message: 'Failed to process requisition',
            err: err.message,
            code: err.code
        });
    };
};

exports.getByCustomerId = async (req, res,  next) => {
    try{
        const cb = await repository.getByCustomerId(req.params.id);
        if(cb === null) {
            res.status(202).send({message: 'User has no orders'});
        } else {
            res.status(200).send(cb);
        }
    } catch(err) {
        res.status(500).send({
            message: 'Failed to process requisition',
            err: err.message,
            code: err.code
        });
    };
};

exports.post = async (req, res, next) => {
    let now = new Date();
    let data = {
        customer: req.body.customer,
        items: req.body.items,
        totalPrice: req.body.totalPrice
    };
    try {
        let cb = await repository.create(data);
        if(cb != null) {
            repository.updateQuantities(cb.items);
        }
        res.status(200).send({
            message: 'Order registered',
            data: cb
        });
    } catch(err) {
        res.status(500).send({
            message: 'Failed to process requisition',
            err: err.message,
            code: err.code
        });
    }
};
