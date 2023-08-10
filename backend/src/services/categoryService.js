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
  const categoriesWithPath = async () => {
    const categories = await findAll();

    const getParent = (parentId) =>
      categories.find((p) => p.id === parentId) || null;

    const dataCategories = categories.map((category) => {
      let path = category.name;
      let parent = getParent(category.parentId);

      while (parent) {
        path = `${parent.name} > ${path}`;
        parent = getParent(parent.parentId);
      }

      return { ...category, path };
    });

    const orderCategories = dataCategories.sort((a, b) =>
      a.path.localeCompare(b.path)
    );

    return orderCategories;
  };

  return { create, findOne, findAll, update, remove, categoriesWithPath };
};
