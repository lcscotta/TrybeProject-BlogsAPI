const express = require('express');
// const blogpostController = require('../controllers/blogpostController');
const mtoken = require('../middleware/authToken');

const router = express.Router();

router.use(mtoken.authenticateToken);
// router.post('/', blogpostController.addBPost);

module.exports = router;