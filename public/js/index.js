// Third party libs.
var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = require('backbone.marionette');
var App = require('./app')

// Collections and data.
var RecipeCollection = require('./collections/recipe_collection');
var IngredientModel = require('./models/ingredient_model');
var allRecipes = require('../../recipes.json');

// Views
var RecipeTable = require('./views/recipe_table');
var IngredientList = require('./views/ingredient_list');

$(function () {
	// Start the application.
	App.start();

	// Initialize collections.
	App.recipes = new RecipeCollection();
	App.uniqIngredients = new IngredientModel();

	// Initialize the views.
	var recipeTable = new RecipeTable({collection: App.recipes});
	var ingredientList = new IngredientList({model: App.uniqIngredients});

	// Set the collection using data from local storage if available.
	if (localStorage.getItem('ingredient')) {
		recipeTable.filterRecipes(false, localStorage.getItem('ingredient'));
		App.recipeTableRegion.show(recipeTable);
		App.ingredientListRegion.show(ingredientList);
		recipeTable.$el.find('.ingredient-select').val(localStorage.getItem('ingredient'));
	}

	else {
		App.recipes.set(allRecipes);
		App.recipeTableRegion.show(recipeTable);
		App.ingredientListRegion.show(ingredientList);
	}
}); // End Document ready.




