module.exports = app => {
  const patch = app.src.controllers;
  app.route('/users').post(patch.userController.create)
  app.route('/users/:id').put(patch.userController.update)
  app.route('/users').get(patch.userController.findAll)
  app.route('/users/:id').get(patch.userController.findOne)
}