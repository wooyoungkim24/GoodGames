const express = require('express');

const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { requireAuth } = require('../auth');


const router = express.Router();

router.get('/', asyncHandler(async(req,res) =>{
    const collections = await db.Collection.findAll( { where: { userId: req.session.auth.userId} });

    //get all collected that belong to current user
    const userCollected = await db.Collected.findAll( {  } )
    res.render('collections-list', {
        collections,
        //userCollected,
    })
}));


// router.get('/collections/:id(\\d+)', asyncHandler(async(req,res) =>{
//     const collectionsId = parseInt(req.params.id, 10);
//     const userCollection = await db.Collection.findAll(collectionsId)

//     res.render('collection-page', {

//     })
// }))





module.exports = router;
