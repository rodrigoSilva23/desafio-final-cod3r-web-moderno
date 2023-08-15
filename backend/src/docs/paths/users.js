module.exports = {
  // method of operation
  "/users": {
    post: {
      tags: ["users"],
      security: [{ bearerAuth: [] }],
      requestBody: {
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/RequestUsers",
            },
          },
        },
      },
      responses: {
        201: {
          description: "users created successfully",
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
    get: {
      tags: ["users"],
      security: [{ bearerAuth: [] }],
      responses: {
        200: {
          description: "get all users",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/ResponseUsers",
                },
              },
            },
          },
        },
        401: {
          description: "Unauthorized",
        },
        500: {
          description: "Internal Server Error",
        },
      },
    },
    put: {
      tags: ["users"],
      security: [{ bearerAuth: [] }],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "integer",
          },
        },
      ],

      responses: {
        200: {
          description: "success",
        },
        400: {
          description: "Bad Request",
        },
        500: {
          description: "Internal Server Error",
        },
      },
    },
  },
  get: {
    tags: ["users"],
    security: [{ bearerAuth: [] }],
    parameters: [
      {
        name: "id",
        in: "path",
        required: true,
        schema: {
          type: "integer",
        },
      },
    ],

    responses: {
      200: {
        description: "get user",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/ResponseUsers",
            },
          },
        },
      },
      500: {
        description: "Internal Server Error",
      },
    },
  },
};
