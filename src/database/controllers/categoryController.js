const s = require('../services/categoryService');

const addCat = async (req, res, next) => {
  try {
    const { name } = req.body;
    const data = await s.addCat(name);
    if (data.message) return res.status(data.status).json({ message: data.message });
    return res.status(201).json(data);
  } catch (e) {
    console.log(e);
    next(e);
  }
};

const getAll = async (_req, res, _next) => {
  const infos = await s.getAll();
  console.log('INFOS CATEGORY: ', infos);
  return res.status(200).json(infos);
};

module.exports = {
  getAll,
  addCat,
}; 