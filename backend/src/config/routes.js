const admin = require('./rulesAccess');
module.exports = (app) => {
  const patch = app.src.controllers;
  const authenticate = app.src.config.passport.authenticate();

  app.route("/signin").post(patch.authController.signin);
  // app.route("/signup").post(patch.authController.signin);
  app.route("/validate-token").post(patch.authController.validateToken);
  app
    .route("/users")
    .all(authenticate)
    .post(admin(patch.userController.create))
    .get(admin(patch.userController.findAll));

  app
    .route("/users/:id")
    .all(authenticate)
    .put(admin(patch.userController.update))
    .get(admin(patch.userController.findOne));

  app
    .route("/categories")
    .all(authenticate)
    .post(admin(patch.categoryController.create))
    .get(admin(patch.categoryController.findAll));
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
    .put(admin(patch.categoryController.update))
    .get(patch.categoryController.findOne)
    .delete(admin(patch.categoryController.remove));
  app
    .route("/articles")
    .all(authenticate)
    .post(admin(patch.articlesController.create))
    .get(admin(patch.articlesController.findAll));
  
  app
    .route("/articles/:id")
    .all(authenticate)
    .put(admin(patch.articlesController.update))
    .get(patch.articlesController.findOne)
    .delete(admin(patch.articlesController.remove));
  app
    .route("/categories/:id/articles")
    .all(authenticate)
    .get(patch.articlesController.articlesByCategory)
};
