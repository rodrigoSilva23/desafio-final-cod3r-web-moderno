module.exports = (app) => {
  var db = app.db;
  const create = async (data) => {
    try {
      return db("categories").insert(data);
    } catch (e) {
      console.error(e);
      throw new Error("Internal Server Error");
    }
  };
  const findOne = async (id) => {
    try {
      return await db("categories").select().where("id", id).first();
    } catch (e) {
      console.error(e);
      throw new Error("Internal Server Error");
    }
  };
  const findAll = async () => {
    try {
      return await db("categories").select();
    } catch (e) {
      console.error(e);
      throw new Error("Internal Server Error");
    }
  };
  const update = async (id, data) => {
    try {
      const keys = Object.keys(data);
      return await db("categories")
        .where("id", id)
        .returning(["id", ...keys])
        .update(data);
    } catch (e) {
      console.error(e);
      throw new Error("Internal Server Error");
    }
  };

  const remove = async (id) => {
    try {
      return await db("categories").delete().where("id", id);
    } catch (e) {
      console.error(e);
      throw new Error("Internal Server Error");
    }
  };

  return { create, findOne, findAll, update, remove };
};
