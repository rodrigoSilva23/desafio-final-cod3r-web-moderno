module.exports = {
  // method of operation
  "/articles": {
    post: {
      tags: ["articles"],
      security: [{ bearerAuth: [] }],
      description: "create a new category",
      requestBody: {
        description: "data needed to create a category",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/RequestArticles",
            },
          },
        },
      },
      responses: {
        201: {
          description: "articles created successfully",
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
      tags: ["articles"],
      security: [{ bearerAuth: [] }],
      description: "get all articles",
      responses: {
        200: {
          description: "articles retrieved successfully",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/ResponseArticles",
                },
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
  "/articles/{id}": {
    get: {
      tags: ["articles"],
      security: [{ bearerAuth: [] }],
      description: "get a category",
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
          description: "article retrieved successfully",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ResponseArticles",
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
    put: {
      tags: ["articles"],
      security: [{ bearerAuth: [] }],
      description: "get a category",
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
      requestBody: {
        description: "data needed to create a category",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/RequestArticles",
            },
          },
        },
      },
      responses: {
        200: {
          description: "successfully updated article",
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
    delete: {
      tags: ["articles"],
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
        204: {
          description: "deleted successfully",
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
  "/categories/{id}/articles": {
    get: {
      tags: ["articles"],
      security: [{ bearerAuth: [] }],
      description: "get a articles by category",
      parameters: [
        {
          name: "categoryId",
          required: true,
          in: "path",
          schema: {
            type: "integer",
            minimum: 1,
          },
        },
        {
          name: "page",
          in: "query",
          schema: {
            type: "integer",
            minimum: 1,
          },
        },
        {
          name: "limit",
          in: "query",
          schema: {
            type: "integer",
            minimum: 1,
          },
        },
      ],
      responses: {
        200: {
          description: "success",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/ResponseArticlesByCategory",
                
                },
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
