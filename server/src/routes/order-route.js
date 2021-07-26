'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/order-controller');
const authService = require('../services/authentication');

// GET
router.get('/', controller.get);
router.get('/customer/:id', controller.getByCustomerId);

// POST
// Colocar middleware authService.authorize entre a rota e o metodo do controller
router.post('/', controller.checkStock, controller.post);

// PUT

// DELETE


module.exports = router;
