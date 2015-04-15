// APP SET UP AND BROWSERIFY ENTRY FILE ---------------------

// Third party libs.
var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = require('backbone.marionette');

// Collections and data.
var RecipeCollection = require('./collections/recipe_collection');
var IngredientModel = require('./models/ingredient_model');
var allRecipes = require('../../recipes.json');

// Views
var RecipeTable = require('./views/recipe_table');
var IngredientList = require('./views/ingredient_list');

// Set up and initialize the app.
var App = new Marionette.Application();

App.on('start', function (options) {
	Backbone.history.start();
});

// Add regions to hold relevant views.
App.addRegions({
	recipeTableRegion: '#recipe-table-region',
	ingredientListRegion: '#ingredient-list-region'
});

$(function () {
	// Start the application.
	App.start();

	// Initialize collections.
	App.selectedRecipes = new RecipeCollection();
	App.uniqIngredients = new IngredientModel();

	// Initialize the views.
	var recipeTable = new RecipeTable({collection: App.selectedRecipes});
	var ingredientList = new IngredientList({model: App.uniqIngredients});

	// Retrieve data.
	// If there is nothing in local storage, then bootstrap the data.
	App.selectedRecipes.fetch({
		success: function (storedRecipes, response, options) {
			// If nothing in local storage, then use the bootstrapped data.
			if (storedRecipes.length === 0) {
				App.selectedRecipes.set(allRecipes);
			}

			else {
				App.selectedRecipes.set(storedRecipes);
			}

			// Set ingredients based on recipes.
			App.uniqIngredients.setIngredients(App.selectedRecipes.toJSON(), 'ingredients');

			App.recipeTableRegion.show(recipeTable);
			App.ingredientListRegion.show(ingredientList);
		}
	});
}); // End Document ready.




