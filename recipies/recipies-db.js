const db = require('../data/dbConfig');

module.exports={
    getRecipes,
    getShoppingList,
    getInstructions,
    getIngredientRecipes
}

function getRecipes(){
    return db("recipies");
}

function getShoppingList(id){
    return db("ingredients").where("recipe_id", id);
}

function getInstructions(id){
    return db("instructions").select('*').where("recipe_id", id).orderBy("step");
}

function getIngredientRecipes(id){
    return db
    .select("recipies.name","ingredients.name as ingredient_name")
    .from("ingredients")
    .join("recipies","recipies.id","ingredients.recipe_id")
    .where("ingredientType",id);
}

