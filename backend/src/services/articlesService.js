const bcrypt = require("bcrypt-nodejs");
module.exports = (app) => {
  var articlesRepository = app?.src.repositories.articlesRepository;
  const create = (data) => {
    return articlesRepository.create(data);
  };

  const findOne = async (id) => {
    return await articlesRepository.findOne(id);
  };
  const findAll = async (query) => {
    return await articlesRepository.findAll(query);
  };
  const update = async (id, data) => {
    return await articlesRepository.update(id, data);
  };
  const remove = async (id) => {
    return await articlesRepository.remove(id);
  };
  const articlesByCategory = async (data) => {
    return await articlesRepository.articlesByCategory(data);
  };
  return { create, findOne, findAll, update, remove, articlesByCategory };
};
