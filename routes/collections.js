const express = require('express');
const createError = require('http-errors');
const { check, validationResult } = require('express-validator');

const db = require('../db/models');
const { csrfProtection, asyncHandler, getUserEmail } = require('./utils');
const { requireAuth } = require('../auth');



const router = express.Router();

const collectionValidator = [
    check('collection')
        .custom((value) => {
            // console.log('value; ', value);
            if(value === '--Add to collection--' || value === ''){
                throw new Error('Please choose a collection');
            }
            return true;
        })
];

router.get('/', asyncHandler(async(req,res) =>{
    let email = '';
    if(req.session.auth){
        email = await getUserEmail(req.session.auth.userId);
    }

    const collectionsPast = await db.Collection.findAll( { where: { userId: req.session.auth.userId, name: 'Have Played'} });
    const collectionsFuture = await db.Collection.findAll( { where: { userId: req.session.auth.userId, name: 'Want to Play'} });
    const collectionsPresent = await db.Collection.findAll( { where: { userId: req.session.auth.userId, name: 'Currently Playing'} });

    let userCollectedPast = [];
    let userCollectedFuture = [];
    let userCollectedPresent = [];
    // copy line 11 and change to each collection title eg. 'Favorites'
    console.log(collectionsPast);
    if(collectionsPast.length){
        const userCollectedPast = await db.Collected.findAll(
        {
            where: { collectionsId: collectionsPast[0].id },
            include: 'Game',
        } );
    }
    if(collectionsFuture.length){
        const userCollectedFuture = await db.Collected.findAll(
        {
            where: { collectionsId: collectionsFuture[0].id },
            include: 'Game',
        } );
    }
    if(collectionsPresent.length){
        const userCollectedPresent = await db.Collected.findAll(
        {
            where: { collectionsId: collectionsPresent[0].id },
            include: 'Game',
        } );
    }
    res.render('collections-list', {
        email,
        collectionsPast,
        collectionsFuture,
        collectionsPresent,
        userCollectedPast,
        userCollectedFuture,
        userCollectedPresent,
        title: 'My Collections',
    })
}));


router.get('/:id(\\d+)', requireAuth, asyncHandler(async(req, res, next) =>{
    const url = req.originalUrl;
    const collectionsId = parseInt(url.split('/')[2]);
    const userId = req.session.auth.userId;

    let email = '';
    if(req.session.auth){
        email = await getUserEmail(userId);
    }

    const userCollection = await db.Collection.findByPk(collectionsId);
    if (userId !== userCollection.userId) {
        next(createError(403));
    }
    const userCollected = await db.Collected.findAll({where: {collectionsId: userCollection.id}, include: 'Game'});
    res.render('collection-page', {
        email,
        userCollection,
        userCollected
    })
}))


router.post('/update',requireAuth, collectionValidator, asyncHandler(async(req, res,next) =>{
    // const url = req.originalUrl;
    // const collectionsId = parseInt(url.split('/')[2]);

    const userId = req.session.auth.userId;

    const { gameId,collection, collectionId } = req.body;
    const validatorErrors = validationResult(req);
    // console.log("this is test1")
    if(!validatorErrors.isEmpty()){
        res.redirect(`/games/${gameId}`)
    }
    else{
        const collectedToReplaceTo = await db.Collected.findOne({where:{collectionsId:collectionId, gameId}});

        const replacer = await db.Collection.findOne({where:{name:collection, userId}})
        console.log(collectedToReplaceTo.collectionsId)
        console.log(replacer.id)
        // console.log(replacer)
        // console.log(collectionId)
        // await collectedReplace.update({})
        await collectedToReplaceTo.update({collectionsId:replacer.id})
        res.redirect(`/games/${gameId}`)
    }

}))

router.post('/add', requireAuth, collectionValidator,
  asyncHandler(async (req, res) => {
    let userId= req.session.auth.userId

    const {
      collection,
      gameId
    } = req.body;
    // console.log("test2")
    const validatorErrors = validationResult(req);
    if(!validatorErrors.isEmpty()){
        res.redirect(`/games/${gameId}`)
    }
    else{
        const findId = await db.Collection.findOne({where:{name:collection, userId}})

        const newCollected = db.Collected.build({
            collectionsId:findId.id,
            gameId
        });

        await newCollected.save();

        res.redirect(`/games/${gameId}`)
    }
  }));



module.exports = router;
