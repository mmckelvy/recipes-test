// APP SET UP AND BROWSERIFY ENTRY FILE ---------------------

// Requires
var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = require('backbone.marionette');
var RecipeCollection = require('./collections/recipe_collection');
var allRecipes = require('../../recipes.json');
var RecipeTable = require('./views/recipe_table');

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

	// Initialize and fetch the data.
	App.selectedRecipes = new RecipeCollection();

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

			// Instantiate the views
			var recipeTable = new RecipeTable({collection: App.selectedRecipes});
			App.recipeTableRegion.show(recipeTable);
		}
	});
}); // End Document ready.




