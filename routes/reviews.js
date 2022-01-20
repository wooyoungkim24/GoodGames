const express = require("express");
const { check, validationResult } = require("express-validator");

const { csrfProtection, asyncHandler } = require('./utils');
const { requireAuth } = require("../auth");
const db = require('../db/models');

const router = express.Router();

const reviewValidation = [
    check('title')
        .exists({checkFalsy: true})
        .withMessage('Please title your review')
        .isLength({max: 255})
        .withMessage('Title can not be more than 255 characters'),
    check('reviewText')
        .exists({checkFalsy: true})
        .withMessage('Please add a description to your review'),
    check('rating')
        .exists({checkFalsy: true})
        .withMessage("Please rate the game")
];

router.get('/new', csrfProtection, (req, res, next) => {
    console.log('hellooooooo');
    res.render('create-review', {csrfToken: req.csrfToken()});
})

router.post('/', reviewValidation, requireAuth, asyncHandler(async (req, res, next) => {
    const userId = req.session.auth.userId;

    const { title, reviewText, rating, gameId } = req.body;
    const review = db.Review.build({title, reviewText, rating, gameId, userId});
    console.log(req.body);

    const validatorErrors = validationResult(req);
    const errors = [];

    if(validatorErrors.isEmpty()){
        const review = await db.Review.findOne( {where: { userId, gameId }})

        if(!review){
            await review.save();
            res.redirect(`/games/${gameId}`);
        }
        errors.push('You\'ve already reviewed this game.');
    }
    else {
        errors = validatorErrors.array().map((error) => error.msg);
    }

    res.render('game-single')
}));

module.exports = router
