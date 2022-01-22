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
    return avgRating.toFixed(1);
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

// router.get('/games/api',asyncHandler(async(req, res,next) =>{
//     const collecteds = await db.Collected.findAll()
//     const collections = await db.Collection.findAll()
//     const userId = req.session.auth.userId
//     // console.log(req)
//     res.json({collecteds, userId, collections})
// }))


router.get('/games/:id(\\d+)', asyncHandler(async (req, res) => {
    let email = '';


    let gameId = parseInt(req.params.id, 10);
    let game = await db.Game.findByPk(gameId)
    let reviews = await db.Review.findAll({ where: { gameId: gameId }, include: "User" })
    let collectionItems = await db.Collection.findAll();
    const userCollecteds = await db.Collected.findAll({where:{gameId:gameId}, include: "Collection"});
    const userCollectedsCollections = userCollecteds.map(ele => ele.Collection.id)
    const avgRating = getAvgRating(reviews);
    let personalRating = 0;
    let collectionId = 0;
    let userId = -5;
    if (req.session.auth) {
        const personalReview = await db.Review.findOne({where: { userId: req.session.auth.userId, gameId }})
        if(personalReview){
            personalRating = personalReview.rating;
            // console.log(personalRating);
        }
        let test = false;
        email = await getUserEmail(req.session.auth.userId);
        userId = req.session.auth.userId
        let i = 0;
        if(userCollecteds.length >0){
            while(test === false && userCollectedsCollections.length >= i + 1){

                let finder= await db.Collection.findByPk(userCollectedsCollections[i]);
                console.log(finder);
                if (finder.userId === req.session.auth.userId){
                    collectionId = finder.id;
                    test = true;
                }else{
                    i++;
                }
            }
        }

    }
    res.render('game-single', {
        email,
        personalRating,
        avgRating,
        game,
        reviews,
        userCollecteds,
        collectionItems,
        collectionId,
        userId,
        body: {},
        collections: ['Have Played', 'Currently Playing', 'Want to Play']
    })
}))

// router.get('/games/:id(\\d+)', asyncHandler(async(req,res) =>{

//     const gameId = parseInt(req.params.id, 10);
//     const game = await db.Game.findByPk(gameId)
//     const reviews = await db.Review.findAll({where:{gameId:gameId}, include:"User", order: [['id', 'DESC']]})
//     const collectionItems = await db.Collection.findAll();
//     const avgRating = getAvgRating(reviews);

//     let email = '';
//     let personalRating = 0;
//     if(req.session.auth){
//         email = await getUserEmail(req.session.auth.userId);
//         const personalReview = await db.Review.findOne({where: { userId: req.session.auth.userId, gameId }})
//         if(personalReview){
//             personalRating = personalReview.rating;
//             console.log(personalRating);
//         }
//     }

//     res.render('game-single', {
//         email,
//         personalRating,
//         avgRating,
//         game,
//         reviews,
//         userCollecteds,
//         collectionItems,
//         collectionId,
//         userId,
//         body: {},
//         collections: ['Have Played', 'Currently Playing', 'Want to Play']
//     })
// }))






module.exports = router;
