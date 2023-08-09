const { authSecret } = require("../../.env");
const jwt = require("jwt-simple");
const {
  authValidation,
  loginValidation,
} = require("../validation/authValidation");

module.exports = (app) => {
  const signin = async (req, res, next) => {
    try {
      const dataValidated = await loginValidation(req.body);
      const authValidated = await authValidation(dataValidated);
      res.status(201).send(authValidated);
    } catch (validationErrors) {
      if (validationErrors) {
        const errorsJson = validationErrors.inner.reduce((errors, err) => {
          return { ...errors, [err.path]: err.message };
        }, {});
        res.status(400).send(errorsJson);
      }
      res.status(500).send("internal server error");
    }
  };

  const validateToken = async (req, res) => {
    const userData = req.body || null;
    try {
      if (userData) {
        const token = jwt.encode(userData, authSecret);
        const tokenExpiry = token.exp * 1000;
        if (tokenExpiry > new Date()) {
          return res.send(true);
        }
      }
      return res.send(false);
    } catch (e) {
      res.status(500).send("internal server error");
    }
  };
  return { signin, validateToken };
};
