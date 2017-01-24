const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');
const authController = require('../controllers/auth');
const users = require('../controllers/users');
const jwt = require('jsonwebtoken');
const secret = require('./tokens').secret;

function secureRoute(req, res, next) {
  if(!req.headers.authorization) return res.status(401).json({ message: 'Unauthorized'});

  const token = req.headers.authorization.replace('Bearer ', '');

  jwt.verify(token, secret, (err, payload) => {
    if(err) return res.status(401).json({ message: 'Unauthorized' });
    req.user = payload;

    next();
  });
}

router.route('/register')
  .post(authController.register);

router.route('/login')
  .post(authController.login);


router.get('/', (req, res) => res.render('Index'));
router.get('/landing', (req, res) => res.render('Landing'));
router.get('/login', (req, res) => res.render('Login'));
router.get('/register', (req, res) => res.render('Register'));
router.get('/about', (req, res) => res.render('About'));
router.get('/contact', (req, res) => res.render('Contact'));
router.get('/blog', (req, res) => res.render('Blog'));
router.get('/rewards', (req, res) => res.render('Rewards'));
router.get('/categories', (req, res) => res.render('Categories'));

module.exports = router;
