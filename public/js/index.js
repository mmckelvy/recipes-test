// APP SET UP ---------------------

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

	// Retrieve data.
	// If there is nothing in local storage, then bootstrap the data.
	App.recipes.fetch({
		success: function (storedRecipes, response, options) {
			// If nothing in local storage, then use the bootstrapped data.
			if (storedRecipes.length === 0) {
				App.recipes.set(allRecipes);
			}

			else {
				App.selectedRecipes.set(storedRecipes);
			}

			App.recipeTableRegion.show(recipeTable);
			App.ingredientListRegion.show(ingredientList);
		}
	});
}); // End Document ready.




