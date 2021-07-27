'use strict'

const repository = require('../repositories/customer-repository');
const CustomerValidator = require('../validators/customer-validator');
const authService = require('../services/authentication');

exports.authenticate = async (req, res, next) => {
    try {
        const customer = await repository.authenticate(req.params);
        if (!customer) {
            res.status(200).send({
                message: 'Email or password are not valid'
            });
            return;
        }
        // User Token gerenation
        const token = await authService.generateToken({
            id: customer._id,
            email: customer.email,
            name: customer.name,
            roles: customer.roles,
        });

        res.status(201).send({
            token: token,
            data: customer
        });
    } catch (err) {
        res.status(500).send({
            message: 'Failed to process requisition',
            err: err.message,
            code: err.code
        });
    };
};

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

exports.post = async (req, res, next) => {
    try {
        const customerValidator = new CustomerValidator();
        if (customerValidator.postValidation(req.body)) {
            const res1 = await repository.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                roles: ['user']
            });
            if (res1 === null) {
                res.status(202).send([{
                    message: 'Email already in use'
                }]);
            } else{
                res.status(201).send({
                    message: "Sucessful sign up"
                });
            }
        } else {
            res.status(200).send(customerValidator.errors());
        }
    } catch (err) {
        res.status(500).send({
            message: 'Failed to process requisition',
            err: err.message,
            code: err.code
        });
    };;
};

exports.postAdmin = async (req, res, next) => {
    try {
        const customerValidator = new CustomerValidator();
        if (customerValidator.postValidation(req.body)) {
            const res1 = await repository.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                roles: ['admin']
            });
            if (res1 === null) {
                res.status(202).send([{
                    message: 'Email already in use'
                }]);
            } else{
                res.status(201).send({
                    message: "Sucessful sign up"
                });
            }
        } else {
            res.status(200).send(customerValidator.errors());
        }
    } catch (err) {
        res.status(500).send({
            message: 'Failed to process requisition',
            err: err.message,
            code: err.code
        });
    };;
};

exports.put = async (req, res, next) => {
    try {
        const customerValidator = new CustomerValidator();
        if (customerValidator.putValidation(req.body)) {
            const res1 = await repository.update(req.params.id, req.body, req.file);
            if (res1 === null) {
                res.status(200).send([{
                    message: 'Email already in use'
                }]);
            } else {
                res.status(201).send({
                    message: 'User info updated'
                });
                next();
            }
        } else {
            res.status(202).send(customerValidator.errors());
        }
    } catch (err) {
        res.status(500).send({
            message: 'Failed to process requisition',
            err: err.message,
            code: err.code
        });
    };
};

exports.putAdmin = async (req, res, next) => {
    try {
        const email = req.body.email;

        const cb = await repository.updateAdmin(email);
        if (cb === null) {
            res.status(200).send({
                message: "User not found"
            });
        } else if (cb.roles[0] === 'admin') {
            res.status(200).send({
                message: "User is now an admin"
            });
        } else {
            res.status(200).send({
                message: "User is not an admin anymore"
            });
        }

    } catch (err) {
        res.status(500).send({
            message: 'Failed to process requisition',
            err: err.message,
            code: err.code
        });
    };
}

exports.delete = async (req, res, next) => {
    try {
        const cb = await repository.delete(req.params.id);
        if (cb === null) {
            res.status(202).send([{
                message: 'User not found'
            }]);
        } else {
            res.status(200).send({
                message: 'User removed'
            });
        }
    } catch (err) {
        res.status(500).send({
            message: 'Failed to process requisition',
            err: err.message,
            code: err.code
        });
    };
}
