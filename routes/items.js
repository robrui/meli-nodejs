const express = require('express');
const router = express.Router();

const itemsController = require('../controllers/items');

router.get('/:id', itemsController.getItemById);

module.exports = router;