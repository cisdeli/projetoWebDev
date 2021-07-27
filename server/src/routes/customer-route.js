'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/customer-controller');
const authService = require('../services/authentication');

// GET
router.get('/', controller.get);
router.get('/:id', controller.getById);
router.get('/authenticate/:email/:password', controller.authenticate);

// POST
router.post('/', controller.post);
router.post('/admin', controller.postAdmin);

// PUT
// Colocar middleware authService.authorize entre a rota e o metodo do controller
router.put('/:id', controller.put);
// Colocar middleware authService.isAdmin entre a rota e o metodo do controller
router.put('/admin/:token', controller.putAdmin);

// DELETE
// Colocar middleware authService.isAdmin entre a rota e o metodo do controller
router.delete('/:id', controller.delete); //something is wrong

module.exports = router;
