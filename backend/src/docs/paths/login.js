module.exports = {
  // method of operation
  "/signin": {
    post: {
      tags: ["login"],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/RequestSignin",
            },
          },
        },
      },
      responses: {
        201: {
          description: "categories retrieved successfully",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/ResponseSignin",
                },
              },
            },
          },
        },
        400: {
          description: "Bad Request",
        },
        401: {
          description: "Unauthorized",
        },
        500: {
          description: "Internal Server Error",
        },
      },
    },
  },
  "/validateToken": {
    post: {
      tags: ["login"],
      requestBody: {
        description: "is token time validated",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                exp: {
                  type: "number",
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "is token validated",
          content: {
            "application/json": {
              schema: {
                type: "boolean",
                enum: [true, false],
              },
            },
          },
        },
        500: {
          description: "Internal Server Error",
        },
      },
    },
  },
};
