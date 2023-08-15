const login = require("./login")
const categories = require("./categories")
const users = require("./users")
module.exports = {
  components: {
    schemas: {
      ...login,
      ...users,
      ...categories
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
