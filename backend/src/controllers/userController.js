const {
  userCreateValidation,
  userPutValidation,
  IsUserIdValidation,
} = require("../validation/userValidation");

module.exports = (app) => {
  var userService = app?.src.services.userService;
  const create = async (req, res, next) => {
    try {
      const inputValidated = await userCreateValidation(req.body);
      userService.create(inputValidated);
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
      const inputValidated = await IsUserIdValidation(id);
      result = await userService.findOne(inputValidated.id);
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
      const results = await userService.findAll();
      res.send(results);
    } catch (error) {
      res.status(500).send("internal server error");
    }
  };
  const update = async (req, res, next) => {
    try {
      const inputValidated = await userPutValidation(req);
      const id = +req?.params?.id;
      const result = await userService.update(id, inputValidated);
      res.send("success");
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
  return { create, findOne, findAll, update };
};
