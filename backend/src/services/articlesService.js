const bcrypt = require("bcrypt-nodejs");
module.exports = (app) => {
  var articlesRepository = app?.src.repository.articlesRepository;
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
  return { create, findOne, findAll, update,remove };
};
