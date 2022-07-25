const Joi = require('joi');
const { User } = require('../models/index');
const jwtService = require('./jsonwebtoken');

const schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const validarLogin = async (email, password) => {
 try {
 const eOne = { status: 400, message: 'Some required fields are missing' };
  const eTwo = { status: 400, message: 'Invalid fields' };

  const { error } = schema.validate({ email, password });
  if (error) return eOne;

  const user = await User.findOne({ 
    where: { email }, 
  });
  if (!user) return eTwo;

  const token = jwtService.createToken(email);

  return token;
} catch (e) {
  console.log(e.message);
}
};
module.exports = { validarLogin }; 