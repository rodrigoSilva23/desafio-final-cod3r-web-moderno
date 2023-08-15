module.exports = (app) => {
  var db = app.db;
  const create = async (data) => {
    try {
      return db("articles").insert(data);
    } catch (e) {
      console.error(e);
      throw new Error("Internal Server Error");
    }
  };
  const findOne = async (id) => {
    try {
      return await db("articles")
        .select()
        .where("id", id)
        .first()
        .then((a) => {
          return { ...a, content: a.content.toString("utf8") };
        });
    } catch (e) {
      console.error(e);
      throw new Error("Internal Server Error");
    }
  };
  const findAll = async (query) => {
    try {
      const { page = 1, limit = 10 } = query;
      const { count } = await db("articles").count("id").first();
      const offset = page * limit - limit;
      const articles = await db("articles")
        .select()
        .limit(limit)
        .offset(offset)
        .then((rows) => {
          const convertedRows = rows.map((row) => {
            const content = row.content;
            const decodedContent = content.toString("utf8");
            return {
              ...row,
              content: decodedContent,
            };
          });
          return convertedRows;
        });
      return { data: articles, count: parseInt(count), limit, page };
    } catch (e) {
      console.error(e);
      throw new Error("Internal Server Error");
    }
  };
  const update = async (id, data) => {
    try {
      const keys = Object.keys(data);
      return await db("articles")
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
      return await db("articles").delete().where("id", id);
    } catch (e) {
      console.error(e);
      throw new Error("Internal Server Error");
    }
  };

  const articlesByCategory = async (query) => {
    try {
      const { page = 1, limit = 10, id } = query;
      const { count } = await db("articles")
        .where("categoryId", id)
        .count("id")
        .first();
      const categories = await db("categories")
        .where("id", id)
        .then((data) => data.map((c) => c.id));

      const offset = page * limit - limit;
      const articles = await db({ a: "articles", u: "users" })
        .select("a.name", "a.description", "a.imageUrl", { author: "u.name" })
        .limit(limit)
        .whereRaw("??=??", ["u.id", "a.userId"])
        .whereIn("categoryId", categories)
        .offset(offset);
      return { data: articles, count: parseInt(count), limit, page };
    } catch (e) {
      console.error(e);
      throw new Error("Internal Server Error");
    }
  };
  return { create, findOne, findAll, update, remove, articlesByCategory };
};
