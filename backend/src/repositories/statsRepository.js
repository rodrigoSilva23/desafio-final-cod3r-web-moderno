
module.exports =  (app) => {
  
  const Stat = app.mongoose.model('Stat', {
    users: Number,
    categories: Number,
    articles: Number,
    createdAt: Date
})
  const findStat = async () => {

    const test = await Stat.findOne({}, {}, { sort: { createdAt: -1 } }).then(
      (result) => {
        return (
          result || {
            users: 0,
            categories: 0,
            articles: 0,
            createdAt: 0,
          }
        );
      }
    );
    

  };
  return { findStat, Stat };
};
