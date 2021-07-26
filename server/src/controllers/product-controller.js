'use struct'

const repository = require('../repositories/product-repository');
const ProductValidator = require('../validators/product-validator');

// Controllers
exports.checkPostData = async (req, res, next) => {
    const productValidator = new ProductValidator();
    if (!productValidator.postValidation(req.body)) {
        res.status(200).send(productValidator.errors());
    } else {
        next();
    }
}

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

exports.getBySlug = async (req, res, next) => {
    try {
        let data = await repository.getBySlug(req.params.slug);
        if (data === null) {
            res.status(202).send([{
                message: 'Product not found'
            }]);
        } else {
            res.status(200).send(data);
        }
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
        await repository.create(req.body);
        res.status(201).send({
            message: "Product registered"
        });
    } catch (err) {
        res.status(500).send({
            message: 'Failed to process requisition',
            err: err.message,
            code: err.code
        });
    };;
};

exports.checkPutData = async (req, res, next) => {
    const productValidator = new ProductValidator();
    if (!productValidator.putValidation(req.body)) {
        res.status(200).send(productValidator.errors());
    } else {
        next();
    }
}

exports.put = async (req, res, next) => {
    try {
        await repository.update(req.params.id, req.body, req.file);
        res.status(201).send({
            message: 'Product updated'
        })
    } catch (err) {
        res.status(500).send({
            message: 'Failed to process requisition',
            err: err.message,
            code: err.code
        });
    };
};

exports.delete = async (req, res, next) => {
    try {
        const cb = await repository.delete(req.params.id);
        if (cb === null) {
            res.status(202).send([{
                message: 'Product not found'
            }]);
        } else {
            res.status(200).send({
                message: 'Product removed'
            });
        }
    } catch (err) {
        res.status(500).send({
            message: 'Failed to process requisition',
            err: err.message,
            code: err.code
        });
    };
};
