const categories = require("./categories")
module.exports = {
  components: {
    schemas: {
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
