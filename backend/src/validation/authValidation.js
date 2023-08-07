const { authSecret } = require("../../.env");
const db = require("../config/db");
const bcrypt = require("bcrypt-nodejs");
const jwt = require("jwt-simple");
const { object, string } = require("yup");

const loginValidation = async (data) => {
  const userSchema = object({
    email: string().email().max(255).required(),
    password: string().required(),
  });
  const validatedData = await userSchema.validate(data, {
    abortEarly: false,
  });
  return validatedData;
};
const authValidation = async (data) => {
  var user = await db("users")
    .select("id", "name", "email", "admin", "status", "password")
    .where("email", data.email)
    .first();
  const userSchema = object({
    email: string().test("hasUser", "email/password invalid", async (value) => {
      return user;
    }),
    password: string().test(
      "hasUser",
      "email/password invalid",
      async (value) => {
        const isMatch = await bcrypt.compareSync(value, user.password);
        return isMatch;
      }
    ),
  });

  const dateNowInSeconds = Math.floor(Date.now() / 1000);
  const dateInSecondsExpiry = dateNowInSeconds + (60 * 60 + 24 + 3);
  const payload = {
    id: user.id,
    name: user.name,
    email: user.email,
    admin: user.admin,
    status: user.status,
    iat: dateNowInSeconds,
    exp: dateInSecondsExpiry,
  };

  await userSchema.validate(data, {
    abortEarly: false,
  });
  return {
    ...payload,
    token: jwt.encode(payload, authSecret),
  };
};
module.exports = { authValidation, loginValidation };
