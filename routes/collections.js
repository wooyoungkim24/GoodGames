const express = require('express');

const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { requireAuth } = require('../auth');


const router = express.Router();

router.get('/', asyncHandler(async(req,res) =>{
    const collections = await db.Collection.findAll( { where: { userId: req.session.auth.userId, name: 'Favorites'} });
    // copy line 11 and change to each collection title eg. 'Favorites'

    const userCollected = await db.Collected.findAll(
        {
            where: { collectionsId: collections[0].id },
            include: 'Game',
        } );
    res.render('collections-list', {
        collections,
        userCollected,
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
