// APP SET UP AND BROWSERIFY ENTRY FILE ---------------------

var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = require('backbone.marionette');
var RecipeModel = require('./models/recipe_model');


// Set up and initialize the app.
var app = new Marionette.Application();

app.on('start', function (options) {
	Backbone.history.start();
});

app.addRegions({
	recipeTableRegion: '#recipe-table',
	ingredientListRegion: '#ingredient-list'
})

app.start();

