const express = require('express');

const db = require('../db/models');
const { csrfProtection, asyncHandler, getUserEmail } = require('./utils');
const { requireAuth } = require('../auth');


const router = express.Router();

router.get('/', asyncHandler(async(req,res) =>{
    let email = '';
    if(req.session.auth){
        email = await getUserEmail(req.session.auth.userId);
    }

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


// router.get('/collections/:id(\\d+)', asyncHandler(async(req,res) =>{
//     const collectionsId = parseInt(req.params.id, 10);
//     const userCollection = await db.Collection.findAll(collectionsId)

//     res.render('collection-page', {

//     })
// }))





module.exports = router;
