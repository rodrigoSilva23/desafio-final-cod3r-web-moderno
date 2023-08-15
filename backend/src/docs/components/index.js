const login = require("./login")
const categories = require("./categories")
module.exports = {
  components: {
    schemas: {
      ...login,
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
