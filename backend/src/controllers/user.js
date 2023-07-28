module.exports = (app) => {
  const create = (req, res, next) => {
    res.send(req.body);
  };
  const findOne = (req, res, next) => {
    const id = req.params.id;
    res.send("user create" + id);
  };
  const findAll = (req, res, next) => {
    res.send("user create");
  };
  const update = (req, res, next) => {
    res.send("user create");
  };
  return { create, findOne, findAll, update };
};
