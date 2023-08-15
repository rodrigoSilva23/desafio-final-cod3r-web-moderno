module.exports = {
  RequestUsers: {
    type: "object",
    properties: {
      name: {
        type: "string",
        example: "roman",
      },
      email: {
        type: "string",
        format: "email",
        example: "roman@email.com",
      },
      admin: {
        type: "boolan",
        default: false,
        enum: [true, false],
     
      },
      status: {
        type: "string",
        default: "active",
        enum: ["active", "inactive"],
      
      },
      password: {
        type: "string",
        format: "password",
        example: "1234567",
      },
      confirm_password: {
        type: "string",
        format: "password",
        example: "1234567"
      },
    },
    required: ["name","email", "password","password","confirm_password"],
  },
  ResponseUsers: {
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
        format:"email"
      },
      admin: {
        type: "boolean",
        enum: [true, false],
      },
      status: {
        type: "string",
        enum: ["active", "inactive"],
      },
      created_at: {
        type: "date",
      },
      updated_at: {
        type: "date",
      },
    }}
};
