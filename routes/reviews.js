const express = require("express");
const { check, validationResult } = require("express-validator");

const { csrfProtection, asyncHandler } = require('./utils');
const { requireAuth } = require("../auth");
const db = require('../db/models');

const router = express.Router();

const reviewValidation = [
    check('reviewTitle')
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

router.get('/create', csrfProtection, asyncHandler(async(req, res, next) => {
    const url = req.baseUrl;
    const gameId = parseInt(url.split('/')[2]);
    const game = await db.Game.findByPk(gameId);
    console.log(game.id);

    res.render('create-review', {game, csrfToken: req.csrfToken()});
}));

router.post('/', reviewValidation, requireAuth, csrfProtection, asyncHandler(async (req, res, next) => {
    const userId = req.session.auth.userId;
    const url = req.baseUrl;
    const gameId = parseInt(url.split('/')[2]);
    const game = await db.Game.findByPk(gameId);

    const { reviewTitle, reviewText, rating } = req.body;
    const review = await db.Review.build({title:reviewTitle, reviewText, rating, gameId, userId});

    console.log(req.body);

    const validatorErrors = validationResult(req);
    let errors = [];

    if(validatorErrors.isEmpty()){
        const reviewCheck = await db.Review.findOne( {where: { userId, gameId }})

        if(!reviewCheck){
            await review.save();
            res.redirect(`/games/${gameId}`);
        }
        errors.push('You\'ve already reviewed this game.');
    }
    else {
        errors = validatorErrors.array().map((error) => error.msg);
    }

    res.render('create-review', {reviewTitle, reviewText, rating, game, errors, csrfToken: req.csrfToken()})
}));

module.exports = router
