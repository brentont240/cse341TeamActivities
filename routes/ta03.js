//TA03 PLACEHOLDER
const path = require('path');

const express = require('express');

const itemController = require('../controller/ta03');

const router = express.Router();

router.get('/', itemController.getItems);

router.post('/getItems', itemController.getItemsFiltered); 

module.exports = router;
