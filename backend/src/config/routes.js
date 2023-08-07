module.exports = (app) => {
  const patch = app.src.controllers;
  const authenticate = app.src.config.passport.authenticate();

  app.route("/signin").post(patch.authController.signin);
  // app.route("/signup").post(patch.authController.signin);
  app.route("/validate-token").post(patch.authController.validateToken);
  app
    .route("/users")
    .all(authenticate)
    .post(patch.userController.create)
    .get(patch.userController.findAll);

  app
    .route("/users/:id")
    .all(authenticate)
    .put(patch.userController.update)
    .get(patch.userController.findOne);
};
