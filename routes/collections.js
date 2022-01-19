const express = require('express');

const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { requireAuth } = require('../auth');


const router = express.Router();

router.get('/', asyncHandler(async(req,res) =>{
    // const currentUser = await db.User.findByPk(req.session.auth.userId)
    // console.log(req.session.auth.userId);
    // console.log(currentUser)
    //get collections belonging to current user logged in
    const collections = await db.Collection.findAll( { where: { userId: req.session.auth.userId} });

    res.render('collections-list', {
        collections,
    })
}));


// router.get('/collections/:id(\\d+)', asyncHandler(async(req,res) =>{
//     const collectionsId = parseInt(req.params.id, 10);
//     const userCollection = await db.Collection.findAll(collectionsId)

//     res.render('collection-page', {

//     })
// }))





module.exports = router;
