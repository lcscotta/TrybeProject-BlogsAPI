const { Router } = require('express');

const UserController = require('../controllers/user');
const TOKEN = require('../middlewares/token');

const User = Router();

User.use(TOKEN);
User.post('/', UserController.createUser);
User.get('/', UserController.getAll);
User.delete('/me', UserController.removeUser);
User.get('/:id', UserController.getById);

module.exports = User;