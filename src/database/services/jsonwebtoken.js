require('dotenv/config');
const jwtService = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '10d',
  algorithm: 'HS256',
};

const createToken = (user) => jwtService.sign({ data: user }, process.env.JWT_SECRET, jwtConfig);

module.exports = { createToken }; 
