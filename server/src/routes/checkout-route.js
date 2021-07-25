'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/checkout-controller');

// GET
router.get('/', controller.get);
router.get('/:id', controller.getById);

// POST
router.post('/', controller.post);


// DELETE

module.exports = router;
