const bcrypt = require("bcrypt-nodejs");
module.exports = (app) => {
  var userRepository = app?.src.repository.userRepository;
  const create = (data) => {
    const salt = bcrypt.genSaltSync(10);
    data["password"] = bcrypt.hashSync(data.password, salt);
    return userRepository.create(data);
  };

  const findOne = async (id) => {
    return await userRepository.findOne(id);
  };
  const findAll = async () => {
    return await userRepository.findAll();
  };
  const update = async (id, data) => {
    try {   
      if (data["password"]) {
        const salt = bcrypt.genSaltSync(10);
        data["password"] = bcrypt.hashSync(data.password, salt);
      }
      console.log(data);
      return await userRepository.update(id, data);
    } catch (error) {
      console.log(error);
    }
  };
  return { create, findOne, findAll, update };
};
