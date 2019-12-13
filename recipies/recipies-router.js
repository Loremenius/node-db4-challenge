const express = require('express');

const db = require('./recipies-db');

const router = express.Router();

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

router.get("/:id/shoppingList", (req,res)=>{
    db.getShoppingList(req.params.id)
        .then(data=>{
            res.status(200).json(data);
        })
        .catch(error=>{
            console.log(error);
            res.status(500).json({
                errorMessage:"error getting ingredients", 
                error: error
            })
        })
});

router.get("/:id/instructions", (req,res)=>{
    db.getInstructions()
        .then(data=>{
            res.status(200).json(data);
        })
        .catch(error=>{
            console.log(error);
            res.status(500).json({
                errorMessage:"error getting instructions", 
                error: error
            })
        })
});



module.exports = router;

