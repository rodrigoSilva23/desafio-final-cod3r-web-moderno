module.exports = (app) => {
  var categoryRepository = app?.src.repository.categoryRepository;
  const create = async (data) => {
    return await categoryRepository.create(data);
  };

  const findOne = async (id) => {
    return await categoryRepository.findOne(id);
  };
  const findAll = async () => {
    return await categoryRepository.findAll();
  };
  const update = async (id, data) => {
    return await categoryRepository.update(id, data);
  };
  const remove = async (id) => {
    return await categoryRepository.remove(id);
  };
  return { create, findOne, findAll, update, remove };
};
