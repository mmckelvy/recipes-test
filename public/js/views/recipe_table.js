var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var RecipeRow = require('./recipe_row');
var recipeTableTemplate = require('../../templates/recipe_table.jade');

var RecipeTable = Marionette.CompositeView.extend({

	className: 'recipe-table',
	childView: RecipeRow,
	template: recipeTableTemplate

});

module.exports = RecipeTable;
