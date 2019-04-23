const express = require('express');
const Claim = require('../models/Claim');
const router = new express.Router();

router.post('/create',(req, res) => {
    
    const claim = req.body;
    console.log(claim)
    Claim
        .create(claim)
        .then((createdClaim)=>{
            res.status(200).json({
                success:true,
                message:"Claim was added",
                data:createdClaim
            })
        })
        .catch((err)=>{
            console.log("Something is wrong with adding claim"+err)
        });
    });

    router.get('')
    
module.exports = router;