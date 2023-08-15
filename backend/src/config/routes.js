const admin = require('./rulesAccess');
module.exports = (app) => {
  const patch = app.src.controllers;
  const authenticate = app.src.config.passport.authenticate();

  app.route("/api/v1/signin").post(patch.authController.signin);
  // app.route("/signup").post(patch.authController.signin);
  app.route("/api/v1/validate-token").post(patch.authController.validateToken);
  app
    .route("/api/v1/users")
    .all(authenticate)
    .post(admin(patch.userController.create))
    .get(admin(patch.userController.findAll));

  app
    .route("/api/v1/users/:id")
    .all(authenticate)
    .put(admin(patch.userController.update))
    .get(admin(patch.userController.findOne));

  app
    .route("/api/v1/categories")
    .all(authenticate)
    .post(admin(patch.categoryController.create))
    .get(admin(patch.categoryController.findAll));
  app
    .route("/api/v1/categories/categoriesWithPath")
    .all(authenticate)
    .get(patch.categoryController.categoriesWithPath);
  app
    .route("/api/v1/categories/categoriesByTree")
    .all(authenticate)
    .get(patch.categoryController.categoriesByTree);
  app
    .route("/api/v1/categories/:id")
    .all(authenticate)
    .put(admin(patch.categoryController.update))
    .get(patch.categoryController.findOne)
    .delete(admin(patch.categoryController.remove));
  app
    .route("/api/v1/articles")
    .all(authenticate)
    .post(admin(patch.articlesController.create))
    .get(admin(patch.articlesController.findAll));
  
  app
    .route("/api/v1/articles/:id")
    .all(authenticate)
    .put(admin(patch.articlesController.update))
    .get(patch.articlesController.findOne)
    .delete(admin(patch.articlesController.remove));
  app
    .route("/api/v1/categories/:id/articles")
    .all(authenticate)
    .get(patch.articlesController.articlesByCategory)
    app.route("/api/v1/stats").all(authenticate).get(patch.statsController.findStat);
};
