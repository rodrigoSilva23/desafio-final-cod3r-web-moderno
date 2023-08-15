const db = require("../config/db");
const { object, string, number, ref } = require("yup");

const categoryCreateValidation = async (data) => {
  const userSchema = object({
    name: string()
      .required()
      .min(3)
      .max(70)
      .test("hasCategory", "category already exists", async (value) => {
        const hasId = await db("categories")
          .select()
          .where("name", value)
          .first();
        return !hasId;
      }),
    parentId: number()
      .integer()
      .test("hasParentId", "id does not exist", async (value) => {
        if (Number.isInteger(value)) {
          const hasParentId = await db("categories")
            .select()
            .where("id", value)
            .first();
          return hasParentId;
        }
        return true;
      }),
  });
  const validatedData = await userSchema.validate(data, {
    abortEarly: false,
    stripUnknown: true
  });
  return validatedData;
};

const categoryPutValidation = async (data) => {
  data.body["id"] = data.params?.id;
  const userSchema = object({
    id: number()
      .required()
      .test("hasCategory", "id does not exist", async (value) => {
        const hasId = await db("categories")
          .select()
          .where("id", value)
          .first();
        return hasId;
      }),
    name: string().required().min(3).max(255),
    parentId: number()
      .integer()
      .test("hasParentId", "parentId does not exist", async (value) => {
        if (Number.isInteger(value)) {
          const hasParentId = await db("categories")
            .select()
            .where("parentId", value)
            .first();
          return hasParentId;
        }
        return true;
      })
      .test(
        "hasParentId",
        "cannot associate a parentId with itself. Please choose a different parent for this entity.",
        async (value, props) => {
          if (Number.isInteger(value)) {
            const { id } = props?.parent;
            if (id === value) return false;
          }
          return true;
        }
      ),
  });
  validatedData = await userSchema.validate(data.body, {
    abortEarly: false,
    stripUnknown: true
  });
  return validatedData;
};

const categoryIdValidation = async (id) => {
  const userSchema = object({
    id: number()
      .required()
      .test("hasId", "id does not exist", async (value) => {
        const hasId = await db("categories")
          .select()
          .where("id", value)
          .first();
        return hasId;
      }),
  });
  const validatedData = await userSchema.validate({ id });

  return validatedData;
};
const categoryRemoveValidation = async (id) => {
  const userSchema = object({
    id: number()
      .required()
      .test("hasId", "id does not exist", async (value) => {
        const hasId = await db("categories")
          .select()
          .where("id", value)
          .first();
        return Boolean(hasId);
      })
      .test(
        "hasSubcategory",
        "Unable to delete a category linked to subcategories",
        async (value) => {
          const hasSubcategory = await db("categories")
            .select()
            .where("parentId", value)
            .first();
        
          return !hasSubcategory;
        }
      )
      .test(
        "hasCategory",
        "Unable to delete a category linked to articles",
        async (value) => {
          const hasCategory = await db("articles")
            .select()
            .where("categoryId", value)
            .first();
          return !hasCategory;
        }
      ),
  });
  const validatedData = await userSchema.validate({ id });

  return validatedData;
};
module.exports = {
  categoryCreateValidation,
  categoryIdValidation,
  categoryPutValidation,
  categoryRemoveValidation,
};
