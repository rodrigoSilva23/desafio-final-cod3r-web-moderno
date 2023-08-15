const categories = require("./categories");
const login = require("./login");
const users = require("./users");
const articles = require("./articles");
module.exports = {
  paths: {
    ...login,
    ...users,
    ...categories,
    ...articles,
  },
};
