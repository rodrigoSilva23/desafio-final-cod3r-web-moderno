module.exports = (app) => {
  var statsRepository = app?.src.repositories.statsRepository;
  const findStat = async () => {
    return await statsRepository.findStat();
  };
  return { findStat };
};
