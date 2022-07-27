// const { validarLogin } = require('../services/loginServices');

// const sigIn = async (req, res, next) => {
//   try {
//     console.log(`requisição: ${res}`);
//     const { email, password } = req.body;
//     const data = await validarLogin(email, password);
//     if (data.message) return res.status(data.status).json({ message: data.message });
//     return res.status(200).json({ token: data });
//   } catch (e) {
//     next(e);
//   }
// };

// module.exports = { sigIn }; 