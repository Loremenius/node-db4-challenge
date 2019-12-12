const express = require('express');

const db = require('./recipies-db');

const router = express.router();

router.get("/", (req,res)=>{
    db.getRecipes()
        .then(data=>{
            res.status(200).json(data);
        })
        .catch(error=>{
            console.log(error);
            res.status(500).json({
                errorMessage:"error getting recipes", 
                error: error
            })
        })
});

router.get("/", (req,res)=>{
    db.getRecipes()
        .then(data=>{
            res.status(200).json(data);
        })
        .catch(error=>{
            console.log(error);
            res.status(500).json({
                errorMessage:"error getting recipes", 
                error: error
            })
        })
});

module.exports = router;

