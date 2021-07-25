'use strict'

const repository = require('../repositories/checkout-repository');
const CheckoutValidator = require('../validators/checkout-validator');


exports.get = async (req, res, next) => {
    try {
        const data = await repository.get();
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send({
            message: 'Failed to process requisition',
            err: err.message,
            code: err.code
        });
    };
};

exports.getById = async (req, res, next) => {
    try {
        const data = await repository.getById(req.params.id);
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send({
            message: 'Failed to process requisition',
            err: err.message,
            code: err.code
        });
    };
};



// card: [{
//     nameOnCard:
//         req.body.card[0].nameOnCard
//     ,
//     cardNumber:
//         req.body.card[0].cardNumber
//     ,
//     expiration:
//         req.body.card[0].expiration
//     ,
//     cvv:
//         req.body.card[0].cvv
// }]

exports.post = async (req, res, next) => {
    try {
        const checkoutValidator = new CheckoutValidator();
        if (checkoutValidator.postValidation(req.body)) {
            const res1 = await repository.post({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                address: req.body.address,
                state: req.body.state,
                city: req.body.city,
                cep: req.body.cep
            });
            res.status(201).send({
                message: "Sucessful checkout"
            });
        } else {
            res.status(200).send(checkoutValidator.errors());
        }
    } catch (err) {
        res.status(500).send({
            message: 'Failed to process requisition',
            err: err.message,
            code: err.code
        });
    };;
};
