const express = require('express');
const Claim = require('../models/Claim');
const router = new express.Router();

router.get('/', (req, res)=>{
    Claim
        .find({})
        .then((claims)=>{
            res.status(200).json({
                success:true,
                message:"All claims returned",
                data:claims
            })
        }).catch((err)=>{
            console.log(`This is an error from retreiving all claims: ${err}`)
        })
});

module.exports = router;