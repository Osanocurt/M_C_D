const router = require('express').Router();
const dealsController = require('../controllers/deals');
const articlesController = require('../controllers/articles');
const authController = require('../controllers/auth');
const oauthController = require('../controllers/oauth');
const secureRoute = require('../lib/secureRoute');

router
  .post('/login', authController.login)
  .post('/register', authController.register)
  .post('/auth/facebook', oauthController.facebook)
  .post('/auth/github', oauthController.github);


router.route('/deals')
  .get(dealsController.index)
  .post(secureRoute, dealsController.create);

router.route('/deals/:id')
  .get(dealsController.show)
  .put(secureRoute, dealsController.update)
  .delete(secureRoute, dealsController.delete);

  router.route('/articles')
    .get(articlesController.index)
    .post(secureRoute, articlesController.create);

  router.route('/articles/:id')
    .get(articlesController.show)
    .put(secureRoute, articlesController.update)
    .delete(secureRoute, articlesController.delete);

module.exports = router;
