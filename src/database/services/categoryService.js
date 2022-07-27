const { Category } = require('../models/categories');

const addCat = async (name) => {
  if (!name) {
    const e = { status: 400, message: '"name" is required' };
    return e;
  }
  const data = await Category.create({ name });
  const id = data.null;

  return { id, name };
};

const getAll = async () => {
  const infos = await Category.findAll();
  return infos;
};

module.exports = {
  getAll,
  addCat,
}; 