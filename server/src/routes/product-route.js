'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controller');
const authService = require('../services/authentication');

// GET
router.get('/', controller.get);
router.get('/:slug', controller.getBySlug);


// POST
// Colocar middleware authService.authorize entre a rota e o metodo do controller
router.post('/', controller.checkPostData, controller.post);

// PUT
// Colocar middleware authService.isAdmin entre a rota e o metodo do controller
router.put('/:id', controller.checkPutData, controller.put);

// DELETE
// Colocar middleware authService.isAdmin entre a rota e o metodo do controller
// Colocar token de volta no path /:token
router.delete('/:id', controller.delete);

module.exports = router;
