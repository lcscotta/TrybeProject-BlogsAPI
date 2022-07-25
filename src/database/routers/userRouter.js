const express = require('express');
const userController = require('../controllers/userController');
const mtoken = require('../middleware/authToken');

const router = express.Router();

router.post('/', userController.addUser);
router.use(mtoken.authenticateToken);
router.get('/', userController.getAll);
router.get('/:id', userController.getById);

module.exports = router; 