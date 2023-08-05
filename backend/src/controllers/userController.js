const {
  userCreateValidation,
  userPutValidation,
  IsUserIdValidation,
} = require("../validation/userValidation");

module.exports = (app) => {
  var userService = app?.src.services.userService;
  const create = async (req, res, next) => {
    try {
      const result = await userCreateValidation(req.body);
      userService.create(result);
      res.status(201).send("user created successfully");
    } catch (validationErrors) {
      const errorsJson = validationErrors.inner.reduce((errors, err) => {
        return { ...errors, [err.path]: err.message };
      }, {});
      res.status(400).send(errorsJson);
    }
  };
  const findOne = async (req, res, next) => {
    try {
      const id = req?.params?.id;
      const isValidated = await IsUserIdValidation(id);
      result = await userService.findOne(isValidated.id);
      res.send(result);
    } catch (validationError) {
      dataError = {
        [validationError.path]: validationError.message,
      };
      res.status(400).send(dataError);
    }
  };
  const findAll = async (req, res, next) => {
    const results = await userService.findAll();
    res.send(results);
  };
  const update = async (req, res, next) => {
    try {
      const isValidated = await userPutValidation(req);
      const id = +req?.params?.id;
      const result = await userService.update(id, isValidated);
      res.send(result);
    } catch (validationErrors) {
      const errorsJson = validationErrors.inner.reduce((errors, err) => {
        return { ...errors, [err.path]: err.message };
      }, {});
      res.status(400).send(errorsJson);
    }
  };
  return { create, findOne, findAll, update };
};
