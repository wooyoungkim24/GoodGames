const express = require('express');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { loginUser, logoutUser } = require('../auth');

const router = express.Router();

const userValidator = [
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide an email')
    .isLength( {max: 100 })
    .withMessage('Email must not be more than 100 characters long')
    .isEmail()
    .withMessage('Please enter a valid email address')
    .custom((email) => {
      return db.User.findOne({ where: { emailAddress: email } })
        .then( ( user ) => {
          if ( user ) {
            return Promise.reject('This Email is already taken');
          }
        });
    }),
]

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.get('/login', csrfProtection, (req, res, next) => {
  res.render('log-in', {csrfToken: req.csrfToken()});
});

router.post('/login', csrfProtection, asyncHandler(async(req, res, next) => {
  const {email, password} = req.body;

  const validatorErrors = validationResult(req);
  const errors = [];

  if(validatorErrors.isEmpty()){
    const user = await db.User.findOne( {where: { email }});

    if(user){
      const passCompare = await bcrypt.compare(password, user.hashedPassword.toString());
      if(passCompare){
        //add user login function from auth.js
        return res.redirect('/');
      }
    }
    errors.push('Email or password are incorrect');
  }
  else {
    errors = validatorErrors.array().map((error) => error.msg);
  }

  res.render('log-in', {
    body: {
      email
    },
    csrfToken: req.csrfToken()
  });

}));

router.get('/signup', (req, res, next) => {
  res.render('sign-up', {csrfToken: req.csrfToken()});
});



module.exports = router;
