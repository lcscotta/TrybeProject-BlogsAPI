const express = require('express');
const catController = require('../controllers/categoryController');
const mtoken = require('../middleware/authToken');

const router = express.Router();

router.use(mtoken.authenticateToken);
router.post('/', catController.addCat);
router.get('/', catController.getAll);

module.exports = router;