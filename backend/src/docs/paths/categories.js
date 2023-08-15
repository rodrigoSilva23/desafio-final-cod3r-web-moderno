module.exports = {
  // method of operation
  "/categories": {
    post: {
      tags: ["categories"],
      security: [{ bearerAuth: [] }],
      description: "create a new category",
      requestBody: {
        description: "data needed to create a category",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/ResponseCategories",
            },
          },
        },
      },
      responses: {
        201: {
          description: "category created successfully",
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
      tags: ["categories"],
      security: [{ bearerAuth: [] }],
      description: "get all categories",
      responses: {
        200: {
          description: "categories retrieved successfully",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/ResponseCategories",
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
  "/categories/{id}": {
    get: {
      tags: ["categories"],
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
          description: "category retrieved successfully",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ResponseCategories",
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
      tags: ["categories"],
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
              $ref: "#/components/schemas/ResponseCategories",
            },
          },
        },
      },
      responses: {
        200: {
          description: "category retrieved successfully",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ResponseCategories",
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
    delete: {
      tags: ["categories"],
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
  "/categories/categoriesWithPath": {
    get: {
      tags: ["categories"],
      security: [{ bearerAuth: [] }],
      description: "get all categories with path",
      responses: {
        200: {
          description: "success",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/ResponseCategoriesWithPath",
                
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
  "/categories/categoriesByTree": {
    get: {
      tags: ["categories"],
      security: [{ bearerAuth: [] }],
      description: "get all categories in tree",
      responses: {
        200: {
          description:"the request must return a category tree",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/ResponseCategoriesInTree",
                
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
