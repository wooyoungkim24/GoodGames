const express = require('express');

const db = require('../db/models');
const { csrfProtection, asyncHandler } = require('./utils');
const { requireAuth } = require('../auth');

const router = express.Router();

router.get('/', asyncHandler(async(req,res) =>{
    //add query for collections
    const collections = await db.Collections.findAll( {  });

    res.render('collections-list', {

    })
}));


router.get('/collections/:id(\\d+)', asyncHandler(async(req,res) =>{
    const collectionId = parseInt(req.params.id, 10);
    const collection = await db.Collection.findByPk(collectionId)

    res.render('collection-page', {

    })
}))


