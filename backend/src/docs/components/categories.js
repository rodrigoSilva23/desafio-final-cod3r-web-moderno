module.exports = {
  RequestCategories: {
    type: "object",
    properties: {
      name: {
        type: "string",
      },
      parentId: {
        type: "integer",
      },
    },
    required: ["name"],
  },
  ResponseCategories: {
    type: "object",
    properties: {
      id: {
        type: "integer",
        example: 2,
      },
      parentId: {
        type: "integer",
        example: 1,
      },
      name: {
        type: "string",
      },
    },
  },
  ResponseCategoriesWithPath: {
    type: "object",
    properties: {
      id: {
        type: "integer",
        example: 2,
      },
      parentId: {
        type: "integer",
        example: 1,
      },
      name: {
        type: "string",
      },
      path: {
        type: "string",
        example: "game > game pro",
      },
    },
  },
  ResponseCategoriesInTree: {
    type: "object",
    description:"the request must return a category tree",
    properties: {
      id: {
        type: "integer",
        example: 2,
      },
      parentId: {
        type: "integer",
        example: 1,
      },
      name: {
        type: "string",
      },
      children: {
        type: "array",
        items: {
          type: "object",
          properties: {
            id: {
              type: "integer",
              example: 2,
            },
            parentId: {
              type: "integer",
              example: 1,
            },
            name: {
              type: "string",
            },
            children: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  id: {
                    type: "integer",
                    example: 2,
                  },
                  parentId: {
                    type: "integer",
                    example: 1,
                  },
                  name: {
                    type: "string",
                  },
                  children: {
                    type: "array",
                    example: [],
                  }
                },
              },
            },
          },
        },
      },
    },
  },
};
