const {
  categoryCreateValidation,
  categoryIdValidation,
  categoryPutValidation,
  categoryRemoveValidation,
} = require("../validation/categoryValidation");

module.exports = (app) => {
  var categoryService = app?.src.services.categoryService;
  const create = async (req, res, next) => {
    try {
      const inputValidated = await categoryCreateValidation(req.body);
      await categoryService.create(inputValidated);
      return res.status(201).send("category created successfully");
    } catch (validationErrors) {
      if (validationErrors.inner) {
        const errorsJson = validationErrors.inner.reduce((errors, err) => {
          return { ...errors, [err.path]: err.message };
        }, {});
        return res.status(400).send(errorsJson);
      }
    }
    res.status(500).send("internal server error");
  };
  const findOne = async (req, res, next) => {
    try {
      const id = req?.params?.id;
      const inputValidated = await categoryIdValidation(id);
      result = await categoryService.findOne(inputValidated.id);
      res.send(result);
    } catch (validationError) {
      if (validationError.inner) {
        dataError = {
          [validationError.path]: validationError.message,
        };
        return res.status(400).send(dataError);
      }
      res.status(500).send("internal server error");
    }
  };
  const findAll = async (req, res, next) => {
    try {
      const results = await categoryService.findAll();
      res.send(results);
    } catch (error) {
      res.status(500).send("internal server error");
    }
  };
  const update = async (req, res, next) => {
    try {
      const id = +req?.params?.id;
      const inputValidated = await categoryPutValidation(req);
      console.log(inputValidated);
      result = await categoryService.update(id, inputValidated);
      res.send(result[0]);
    } catch (validationErrors) {
      if (validationErrors.inner) {
        const errorsJson = validationErrors.inner.reduce((errors, err) => {
          return { ...errors, [err.path]: err.message };
        }, {});
        return  res.status(400).send(errorsJson);
      }
      res.status(500).send("internal server error");
    }
  };

  const remove = async (req, res, next) => {
    try {
      const id = req?.params?.id;
      const inputValidated = await categoryRemoveValidation(id);
      await categoryService.remove(inputValidated.id);
      res.status(204).send();
    } catch (validationError) {
      if (validationError.inner) {
        dataError = {
          [validationError.path]: validationError.message,
        };
        return res.status(400).send(dataError);
      }
      res.status(500).send("internal server error");
    }
  };

  const categoriesWithPath = async (req, res, next) => {
    try {
      const results = await categoryService.categoriesWithPath();
      res.send(results);
    } catch (error) {
      res.status(500).send("internal server error");
    }
  };
  const categoriesByTree = async (req, res, next) => {
    try {
      const results = await categoryService.categoriesByTree();
      res.send(results);
    } catch (error) {
      res.status(500).send("internal server error");
    }
  };
  return {
    create,
    findOne,
    findAll,
    update,
    remove,
    categoriesWithPath,
    categoriesByTree,
  };
};
