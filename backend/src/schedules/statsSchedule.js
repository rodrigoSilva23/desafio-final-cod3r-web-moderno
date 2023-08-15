const schedule = require("node-schedule");
const mongoose = require("mongoose");
module.exports = (app) => {
  const everyMinute = "*/1 * * * * *";
  schedule.scheduleJob(everyMinute, async function () {

    const { count: users } = await app.db("users").count("id").first();
    const { count: articles } = await app.db("articles").count("id").first();
    const { count: categories } = await app
      .db("categories")
      .count("id")
      .first();
    // const { Stat } = await app?.src.repositories.statsRepository;
    // const lastStat = await Stat.findOne({}, {},
    //   { sort: { 'createdAt' : -1 } })



    // const stat = new Stat({
    //   users,
    //   articles,
    //   categories,
    //   createdAt: new Date(),
    // });

  });
};
