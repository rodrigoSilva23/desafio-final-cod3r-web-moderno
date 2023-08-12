const db = require("../config/db");
const { object, string, mixed, number } = require("yup");

const articlesCreateValidation = async (data) => {
  const userSchema = object({
    name: string()
      .required()
      .min(3)
      .max(255)
      .test("hasName", "articles name already exists", async (value) => {
        const hasName = await db("articles")
          .select()
          .where("name", value)
          .first();

        return !hasName;
      }),
    description: string().max(255).required(),
    imageUrl: string().max(255).required(),
    content: string().required(),
    categoryId: number()
      .integer()
      .required()
      .test("hasCategory", "id does not exist", async (value) => {
        const hasId = await db("categories")
          .select()
          .where("id", value)
          .first();
        return hasId;
      }),
    userId: number()
      .integer()
      .required()
      .test("hasId", "id does not exist", async (value) => {
        const hasId = await db("users").select().where("id", value).first();
        return hasId;
      }),
  });
  const validatedData = await userSchema.validate(data, {
    abortEarly: false,
  });
  return validatedData;
};

const articlesPutValidation = async (data) => {
  data.body["id"] = data.params?.id;
  const userSchema = object({
    id: number()
      .integer()
      .required()
      .test("hasId", "id does not exist", async (value) => {
        const hasId = await db("articles").select().where("id", value).first();

        return hasId;
      }),
    name: string()
      .required()
      .min(3)
      .max(255)
      .test("hasName", "articles name already exists", async (value) => {
        const hasName = await db("articles")
          .select()
          .where("name", value)
          .first();

        return !hasName;
      }),
    description: string().max(255),
    imageUrl: string().max(255),
    content: string(),
    categoryId: number()
      .integer()
      .test("hasCategory", "id category does not exist", async (value) => {
        if (Number.isInteger(value)) {
          const hasId = await db("categories")
            .select()
            .where("id", value)
            .first();
          return hasId;
        }
        return true;
      }),
    userId: number()
      .integer()
      .test("hasId", "id users does not exist", async (value) => {
        if (Number.isInteger(value)) {
          const hasId = await db("users").select().where("id", value).first();
          return hasId;
        }
        return true;
      }),
  });
  const validatedData = await userSchema.validate(data.body, {
    abortEarly: false,
  });
  return validatedData;
};

const articlesIdValidation = async (id) => {
  const userSchema = object({
    id: number()
      .required()
      .test("hasId", "id does not exist", async (value) => {
        const hasId = await db("articles").select().where("id", value).first();
        return hasId;
      }),
  });
  const validatedData = await userSchema.validate({ id });

  return validatedData;
};

const articlesPageValidation = async (data) => {
  const userSchema = object({
    page: mixed().transform((value) => {
      pageDefault = 1;
      value = Number(value);
      if (value && Number.isInteger(value) && value > 0) {
        return value;
      }
      return 1;
    }),
    limit: mixed().transform((value) => {
      value = Number(value);
      limitDefault = 10;
      if (value && Number.isInteger(value) && value > 0) {
        return value;
      }
      return limitDefault;
    }),
  });
  const validatedData = await userSchema.validate(data, {
    abortEarly: false,
  });

  return validatedData;
};
const articlesCategoryIdValidation = async (id) => {
  const userSchema = object({
    id: number()
      .required()
      .test("hasId", "id does not exist", async (value) => {
        const hasId = await db("categories").select().where("id", value).first();
        return hasId;
      }),
  });
  const validatedData = await userSchema.validate({ id });

  return validatedData;
};
module.exports = {
  articlesCreateValidation,
  articlesIdValidation,
  articlesPutValidation,
  articlesPageValidation,
  articlesCategoryIdValidation
};
