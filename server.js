const express = require("express");

const recipeRouter = require('./recipies/recipies-router');

const db = require('./recipies/recipies-db');

const server = express();

server.use(express.json());

server.use('/api/recipes', recipeRouter);

server.get("/api/ingredients/:id/recipes",(req,res)=>{
    db.getIngredientRecipes(req.params.id)
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

module.exports = server;