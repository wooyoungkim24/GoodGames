const express = require('express');
const createError = require('http-errors');
const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { requireAuth } = require('../auth');



const router = express.Router();

router.get('/', asyncHandler(async(req,res) =>{
    const collectionsPast = await db.Collection.findAll( { where: { userId: req.session.auth.userId, name: 'Have Played'} });
    const collectionsFuture = await db.Collection.findAll( { where: { userId: req.session.auth.userId, name: 'Want to Play'} });
    const collectionsPresent = await db.Collection.findAll( { where: { userId: req.session.auth.userId, name: 'Currently Playing'} });

    // copy line 11 and change to each collection title eg. 'Favorites'

    const userCollectedPast = await db.Collected.findAll(
        {
            where: { collectionsId: collectionsPast[0].id },
            include: 'Game',
        } );
    const userCollectedFuture = await db.Collected.findAll(
        {
            where: { collectionsId: collectionsFuture[0].id },
            include: 'Game',
        } );
    const userCollectedPresent = await db.Collected.findAll(
        {
            where: { collectionsId: collectionsPresent[0].id },
            include: 'Game',
        } );
    res.render('collections-list', {
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

    const userCollection = await db.Collection.findByPk(collectionsId);
    if (userId !== userCollection.userId) {
        next(createError(403));
    }
    const userCollected = await db.Collected.findAll({where: {collectionsId: userCollection.id}, include: 'Game'});
    res.render('collection-page', {
        userCollection,
        userCollected
    })
}))





module.exports = router;
