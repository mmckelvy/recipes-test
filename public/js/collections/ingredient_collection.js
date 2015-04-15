var Backbone = require('backbone');
Backbone.LocalStorage = require('backbone.localstorage');
var IngredientModel = require('../models/recipe_model');

var IngredientCollection = Backbone.Collection.extend({

	model: IngredientModel,
	localStorage: new Backbone.LocalStorage('IngredientCollection')

});

module.exports = IngredientCollection;