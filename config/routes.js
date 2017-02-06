const router = require('express').Router();
const dealsController = require('../controllers/deals');
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

module.exports = router;
