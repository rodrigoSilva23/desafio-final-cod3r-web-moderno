const db = require("../config/db");
const { object, string, ref, boolean,number } = require("yup");

const userCreateValidation = async (data) => {
  const userSchema = object({
    name: string().required().min(3).max(255),
    email: string()
      .email()
      .max(255)
      .required()
      .test("hasEmail", "email already registered", async (value) => {
        const hasEmail = await db("users")
          .select()
          .where("email", value)
          .first();
        return !hasEmail;
      }),
    password: string().min(6).required(),
    confirm_password: string()
      .required()
      .oneOf([ref("password")], "passwords does not match"),
    status: string().default("active").required(),
    admin: boolean().default(false).required(),
  });
  const { confirm_password, ...validatedData } = await userSchema.validate(
    data,
    {
      abortEarly: false,
      stripUnknown: true
    }
  );
  return validatedData;
};

const userPutValidation = async (data) => {
  data.body["id"] = data.params?.id;
  const userSchema = object({
    id: string()
      .required()
      .test("hasId", "id does not exist", async (value) => {
        const hasId = await db("users").select().where("id", value).first();
        return hasId;
      }),
    name: string().min(3).max(255),
    email: string()
      .email()
      .max(255)
      .test("hasEmail", "email already registered", async (value) => {
        const hasEmail = await db("users")
          .select()
          .where("email", value)
          .whereNot("id", data?.body?.id)
          .first();
        return !hasEmail;
      }),
    password: string().min(6),
    confirm_password: string().oneOf(
      [ref("password")],
      "passwords does not match"
    ),
    status: string().oneOf(["active", "inactive"]),
    admin: boolean(),
  });
  const { id, confirm_password, ...validatedData } = await userSchema.validate(
    data.body,
    {
      abortEarly: false,
      stripUnknown: true
    }
  );
  return validatedData;
};

const IsUserIdValidation = async (id) => {
  const userSchema = object({
    id: number()
    .required()
    .test("hasId", "id does not exist", async (value) => {
      const hasId = await db("users").select().where("id", value).first();
      return hasId;
    }),
  });
  const validatedData = await userSchema.validate({id});
  return validatedData;
};

module.exports = {
  userCreateValidation,
  userPutValidation,
  IsUserIdValidation ,
};
