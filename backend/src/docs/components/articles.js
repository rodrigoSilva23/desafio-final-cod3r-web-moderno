module.exports = {
  RequestArticles: {
    type: "object",
    properties: {
      name: {
        type: "string",
      },
      description: {
        type: "string",
      },
      imageUrl: {
        type: "string",
      },
      content: {
        description: "content of the article type binary",
        type: "string",
      },
      categoryId: {
        type: "integer",
      },
      userId: {
        type: "integer",
      },
    },
    required: [
      "name",
      "description",
      "imageUrl",
      "content",
      "categoryId",
      "userId",
    ],
  },
  ResponseArticles: {
    type: "object",

    properties: {
      id: {
        type: "integer",
      },
      name: {
        type: "string",
      },
      description: {
        type: "string",
      },
      imageUrl: {
        type: "string",
      },
      content: {
        type: "string",
      },
      categoryId: {
        type: "integer",
      },
      userId: {
        type: "integer",
      },
    },
  },

  ResponseArticlesByCategory: {
    type: "object",
    properties: {
      data: {
        type: "array",
        items: {
          type: "object",
          properties: {
            name: {
              type: "string",
            },
            description: {
              type: "string",
            },
            imageUrl: {
              type: "string",
            },
            author: {
              type: "string",
            },
          },
        },
      },
      page: {
        type: "integer",
        example: 2,
      },
      limit: {
        type: "integer",
        example: 10,
      },
      count: {
        type: "integer",
        example: 15,
      },
    },
  },
};
