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

  app
    .route("/categories")
    .all(authenticate)
    .post(patch.categoryController.create)
    .get(patch.categoryController.findAll);
  app
    .route("/categories/categoriesWithPath")
    .all(authenticate)
    .get(patch.categoryController.categoriesWithPath);
  app
    .route("/categories/categoriesByTree")
    .all(authenticate)
    .get(patch.categoryController.categoriesByTree);
  app
    .route("/categories/:id")
    .all(authenticate)
    .put(patch.categoryController.update)
    .get(patch.categoryController.findOne)
    .delete(patch.categoryController.remove);
  app
    .route("/articles")
    .all(authenticate)
    .post(patch.articlesController.create)
    .get(patch.articlesController.findAll);
  
  app
    .route("/articles/:id")
    .all(authenticate)
    .put(patch.articlesController.update)
    .get(patch.articlesController.findOne)
    .delete(patch.articlesController.remove);
  app
    .route("/categories/:id/articles")
    .all(authenticate)
    .get(patch.articlesController.articlesByCategory)
};
