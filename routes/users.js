const express = require('express');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { loginUser, logoutUser } = require('../auth');

const router = express.Router();

const signupValidator = [
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide an email')
    .isLength( {max: 100 })
    .withMessage('Email must not be more than 100 characters long')
    .isEmail()
    .withMessage('Please enter a valid email address')
    .custom((email) => {
      return db.User.findOne({ where: { email } })
        .then( ( user ) => {
          if ( user ) {
            return Promise.reject('This Email is already taken');
          }
        });
    }),
    check('password')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Password')
        .isLength({ max: 50 })
        .withMessage('Password must not be more than 50 characters long'),
        // .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
        // .withMessage('Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*")'),
    check('confirmPassword')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Confirm Password')
        .isLength({ max: 50 })
        .withMessage('Confirm Password must not be more than 50 characters long')
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Confirm Password does not match Password');
            }
            return true;
        })
]

const loginValidators = [
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Email Address'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a value for Password'),
];


/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

router.get('/login', csrfProtection, (req, res) => {

  res.render('log-in', {
    title: "Log In",
    email:"",
    csrfToken: req.csrfToken()});
});

router.post('/login', loginValidators, csrfProtection, asyncHandler(async(req, res, next) => {
  const {email, password} = req.body;
  console.log(email, password)

  const validatorErrors = validationResult(req);
  const errors = [];

  if(validatorErrors.isEmpty()){
    const user = await db.User.findOne( {where: { email }});

    if(user){
      const passCompare = await bcrypt.compare(password, user.hashedPassword.toString());
      if(passCompare){
        //add user login function from auth.js
        loginUser(req,res,user)
        return res.redirect('/');
      }
    }
    errors.push('Email or password are incorrect');
  }
  else {
    errors = validatorErrors.array().map((error) => error.msg);
  }

  res.render('log-in', {
    title: 'Log-In',
    email,
    errors,
    csrfToken: req.csrfToken()
  });

}));

router.get('/signup', csrfProtection, (req, res) => {
  res.render('sign-up', {
    title: "Sign Up",
    email: "",
    csrfToken: req.csrfToken()
  });
});



router.post('/signup', csrfProtection, signupValidator,
  asyncHandler(async (req, res) => {
    const {
      email,
      password
    } = req.body;

    const user = db.User.build({
      email
    });

    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.hashedPassword = hashedPassword;
      await user.save();
      loginUser(req, res, user);
      res.redirect('/');
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      res.render('sign-up', {
        title: 'Sign Up',
        email,
        errors,
        csrfToken: req.csrfToken(),
      });
    }
  }));


  router.post('/logout', (req, res) => {
    logoutUser(req, res);
    res.redirect('/games');
  });


module.exports = router;
