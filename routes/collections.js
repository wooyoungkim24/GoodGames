const express = require('express');

const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { requireAuth } = require('../auth');


const router = express.Router();

router.get('/', asyncHandler(async(req,res) =>{
    console.log(req.session.auth);
    // const currentUser = await db.User.findByPk(req.user)
    // //get collections belonging to current user logged in
    // const collections = await db.Collection.findAll( { where: {collectionsId: currentUser.id} });

    res.render('collections-list', {
        //collections,
    })
}));


router.get('/collections/:id(\\d+)', asyncHandler(async(req,res) =>{
    const collectionId = parseInt(req.params.id, 10);
    const userCollection = await db.Collection.findAll(collectionId)

    res.render('collection-page', {

    })
}))





module.exports = router;
