module.exports = app => {
  const patch = app.src.controllers;
  app.route('/users').post(patch.user.create)
  app.route('/users').get(patch.user.findAll)
  app.route('/users/:id').get(patch.user.findOne)
}