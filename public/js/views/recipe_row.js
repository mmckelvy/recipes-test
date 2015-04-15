var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
// var RecipeRow = require('recipe_row');
var recipeRowTemplate = require('../../templates/recipe_row.jade');

var RecipeRow = Marionette.ItemView.extend({

	className: 'recipe-row',
	template: recipeRowTemplate,

});

module.exports = RecipeRow;