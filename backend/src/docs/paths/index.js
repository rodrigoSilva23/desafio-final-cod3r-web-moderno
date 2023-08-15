const categories = require("./categories");
const login = require("./login");
const users = require("./users");
module.exports = {
  paths: {
    ...login,
    ...users,
    ...categories,
  },
};
