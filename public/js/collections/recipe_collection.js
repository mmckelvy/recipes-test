// Browserify requires
var Backbone = require('backbone');
Backbone.LocalStorage = require('backbone.localstorage');

var RecipeModel = require('../models/recipe_model');

// Collection props
var RecipeCollection = Backbone.Collection.extend({

	model: RecipeModel,
	localStorage: new Backbone.LocalStorage('RecipeCollection')

});

module.exports = RecipeCollection;