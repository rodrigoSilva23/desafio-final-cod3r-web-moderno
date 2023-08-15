const login = require("./login")
const categories = require("./categories")
const users = require("./users")
const articles = require("./articles")
module.exports = {
  components: {
    schemas: {
      ...login,
      ...users,
      ...categories,
      ...articles
    },
    securitySchemes: {
      bearerAuth: {
        description: "authentication required",
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
};
