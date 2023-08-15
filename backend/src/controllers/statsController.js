module.exports = (app) => {
  var statsService = app?.src.services.statsService;
  const findStat = async (req, res, next) => {
    try {
      const results = await statsService.findStat();
      res.send(results);
    } catch (error) {
      res.status(500).send("internal server error");
    }
  };

  return { findStat };
};
