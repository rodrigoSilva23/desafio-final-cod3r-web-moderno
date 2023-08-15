module.exports = {
  RequestSignin: {
    type: "object",
    properties: {
      email: {
        type: "string",
        format: "email",
        example:"admin@email.com",
      },
      password: {
        type: "string",
        format: "password",
        example:"1234567",
      },
    },
    required: ["email", "password"],
  },
  ResponseSignin: {
    type: "object",
    properties: {
      id: {
        type: "integer",
      },
      name: {
        type: "string",
      },
      email: {
        type: "string",
        format: "email",
      },
      admin: {
        type: "boolean",
        enum:[true, false]
      },
      status: {
        type: "string",
        enum:["active", "inactive"],
      },
      iat: {
        type: "number",
      },
      exp: {
        type: "number",
      },
      token: {
        type: "string",
      },
    },
  },
};
