const express = require('express');



const db = require('../db/models');
const { csrfProtection, asyncHandler, getUserEmail } = require('./utils');
const { requireAuth } = require('../auth');

const router = express.Router();

const getAvgRating = (reviews) => {
    let avgRating = 0;
    for(const review of reviews){
        avgRating += review.rating / reviews.length;
    }
    return avgRating;
};

router.get('/', (req,res) =>{
    res.redirect('/games')
})

router.get('/games', asyncHandler(async(req,res) =>{
    let email = '';
    if(req.session.auth){
        email = await getUserEmail(req.session.auth.userId);
    }

    const games = await db.Game.findAll();
    res.render('games', {
        email,
        games,
        title: "Games"
    })
}))

router.get('/games/:id(\\d+)', asyncHandler(async(req,res) =>{

    const gameId = parseInt(req.params.id, 10);
    const game = await db.Game.findByPk(gameId)
    const reviews = await db.Review.findAll({where:{gameId:gameId}, include:"User"})
    const collectionItems = await db.Collection.findAll();
    const avgRating = getAvgRating(reviews);

    let email = '';
    let personalRating = 0;
    if(req.session.auth){
        email = await getUserEmail(req.session.auth.userId);
        const personalReview = await db.Review.findOne({where: { userId: req.session.auth.userId, gameId }})
        if(personalReview){
            personalRating = personalReview.rating;
            console.log(personalRating);
        }
    }

    res.render('game-single', {
        email,
        personalRating,
        avgRating,
        game,
        reviews,
        collectionItems,
        body: {},
        collections: ['Have Played', 'Playing', 'Want to Play']
    })
}))

// router.get('/games/add', requireAuth, csrfProtection, (req, res) => {
//     const game = db.Games.build();
//     res.render('game-add', {

//     })
// })
// router.post('/games/add', requireAuth, csrfProtection, gameAddValidators,
//     asyncHandler(async (req, res) => {
//         const {collectionsId, gameId} = req.body;
//         const collection = db.Collection.findByPk(collectionsId)
//         const collectionItem = db.Collected.build({

//         })
//     }))






module.exports = router;
