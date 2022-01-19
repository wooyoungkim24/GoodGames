const express = require('express');



const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { requireAuth } = require('../auth');

const router = express.Router();
router.get('/', (req,res) =>{
    res.redirect('/games')
})

router.get('/games', asyncHandler(async(req,res) =>{
    const games = await db.Games.findAll();
    res.render('games-list', {

    })
}))

router.get('/games/:id(\\d+)', asyncHandler(async(req,res) =>{
    const gameId = parseInt(req.params.id, 10);
    const game = await db.Games.findByPk(gameId)
    res.render('game-page', {

    })
}))

router.get('/games/add', requireAuth, csrfProtection, (req, res) => {
    const game = db.Games.build();
    res.render('game-add', {

    })
})
router.post('/games/add', requireAuth, csrfProtection, gameAddValidators,
    asyncHandler(async (req, res) => {
        const {groupOfCollectionsId, gameId} = req.body;
        const collection = db.Collection.findByPk(groupOfCollectionsId)
        const collectionItem = db.Collection.build({
            userId: res.locals.user.id,
            groupOfCollections
        })


    }))






module.exports = router;
