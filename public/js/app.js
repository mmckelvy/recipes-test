// APP SET UP ---------------------

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

// Add regions to hold relevant views.
App.addRegions({
	recipeTableRegion: '#recipe-table-region',
	ingredientListRegion: '#ingredient-list-region'
});

module.exports = App;

