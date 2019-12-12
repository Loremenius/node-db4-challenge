const db = require('../data/dbConfig');

module.exports={
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes(){
    return db("recipies");
}

function getShoppingList(id){
    return db("ingredients").where("recipe_id", id);
}

function getInstructions(id){
    return db("instructions").where("recipe_id", id);
}

