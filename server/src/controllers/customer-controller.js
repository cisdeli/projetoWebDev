'use strict'

const repository = require('../repositories/customer-repository');


exports.post = async(req, res, next) => {
    try {
        await repository.create(req.body)
        res.status(201).send({
            message: 'Cliente cadastrado com sucesso'
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    };
}
