module.exports = (app) => {
  var db = app.db;
  const create = async (data) => {
    try {
      return db("users").insert(data);
    } catch (e) {
      console.log(e);
    }
  };
  const findOne = async (id) => {
    try {
      return await db("users")
        .select(
          "id",
          "name",
          "email",
          "admin",
          "status",
          "created_at",
          "updated_at"
        )
        .where("id", id)
        .first();
    } catch (e) {
      console, log(e);
    }
  };
  const findAll = async () => {
    try {
      return await db("users").select(
        "id",
        "name",
        "email",
        "admin",
        "status",
        "created_at",
        "updated_at"
      );
    } catch (e) {
      console, log(e);
    }
  };
  const update = async (id, data) => {
    const keys = Object.keys(data)
    return await db("users").where("id", id).returning(["id",...keys]).update(data);
  };

 
  return { create, findOne, findAll, update };
};
