const express = require('express');
const loginController = require('../controllers/loginController').default;

const router = express.Router();

router.post('/', loginController.singIn);

module.exports = router; 