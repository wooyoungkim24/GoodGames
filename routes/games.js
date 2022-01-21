const express = require('express');



const db = require('../db/models');
const { csrfProtection, asyncHandler, getUserEmail } = require('./utils');
const { requireAuth } = require('../auth');

const router = express.Router();
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
    let email = '';
    if(req.session.auth){
        email = await getUserEmail(req.session.auth.userId);
    }

    const gameId = parseInt(req.params.id, 10);
    const game = await db.Game.findByPk(gameId)
    const reviews = await db.Review.findAll({where:{gameId:gameId}, include:"User"})
    const collectionItems = await db.Collection.findAll();

    res.render('game-single', {
        email,
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
