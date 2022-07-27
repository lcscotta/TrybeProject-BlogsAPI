const decodeToken = require('jwt-decode');
const s = require('../services/blogpostService');

const addBPost = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const { data } = decodeToken(token);
    const { title, content, categoryIds } = req.body;
    const infos = await s.addBPost(title, content, categoryIds, data);
    if (infos.message) return res.status(infos.status).json({ message: infos.message });
    return res.status(201).json(infos);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  addBPost,
};