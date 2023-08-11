const {
  articlesCreateValidation,
  articlesIdValidation,
  articlesPutValidation,
  articlesPageValidation,
} = require("../validation/articlesValidation");

module.exports = (app) => {
  var articlesService = app?.src.services.articlesService;
  const create = async (req, res, next) => {
    try {
      const inputValidated = await articlesCreateValidation(req.body);
      articlesService.create(inputValidated);
      res.status(201).send("user created successfully");
    } catch (validationErrors) {
      if (validationErrors.inner) {
        const errorsJson = validationErrors.inner.reduce((errors, err) => {
          return { ...errors, [err.path]: err.message };
        }, {});
        return res.status(400).send(errorsJson);
      }
      res.status(500).send("internal server error");
    }
  };
  const findOne = async (req, res, next) => {
    try {
      const id = req?.params?.id;
      const inputValidated = await articlesIdValidation(id);
      result = await articlesService.findOne(inputValidated.id);
      res.send(result);
    } catch (validationError) {
      if (validationError) {
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
      queryValidated = await articlesPageValidation(req.query);
       results = await articlesService.findAll(queryValidated);
      res.send(results);
    } catch (validationErrors) {
      if (validationErrors.inner) {
        const errorsJson = validationErrors.inner.reduce((errors, err) => {
          return { ...errors, [err.path]: err.message };
        }, {});
        return res.status(400).send(errorsJson);
      }
      res.status(500).send("internal server error");
    }
  };
  const update = async (req, res, next) => {
    try {
      const inputValidated = await articlesPutValidation(req);
      const id = +req?.params?.id;
      const result = await articlesService.update(id, inputValidated);
      res.send(result[0]);
    } catch (validationErrors) {
      if (validationErrors.inner) {
        const errorsJson = validationErrors.inner.reduce((errors, err) => {
          return { ...errors, [err.path]: err.message };
        }, {});

        return res.status(400).send(errorsJson);
      }
      res.status(500).send("internal server error");
    }
  };
  const remove = async (req, res, next) => {
    try {
      const id = req?.params?.id;
      const inputValidated = await articlesIdValidation(id);
      await articlesService.remove(inputValidated.id);
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
  return { create, findOne, findAll, update, remove };
};
