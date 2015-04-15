var $ = require('jquery');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var _ = require('lodash');
var RecipeRow = require('./recipe_row');
var recipeTableTemplate = require('../../templates/recipe_table.jade');
var allRecipes = require('../../../recipes.json');

var RecipeTable = Marionette.CompositeView.extend({

	className: 'recipe-table',
	childView: RecipeRow,
	template: recipeTableTemplate,

	events: {
		'change .ingredient-select': 'filterRecipes'
	},

	initialize: function (options) {
		this.allIngredients = this.getAllIngredients(allRecipes);
	},

	// Get all unique ingredients for all recipes.
	getAllIngredients: function (recipes) {
		var args = recipes.map(function (recipe) {
			return recipe.ingredients;
		});
		
		// Concatenate the arrays.
		var allIngredients = [].concat.apply([], args);
		allIngredients.sort();

		return _.uniq(allIngredients, true); // Remove duplicate ingredients.
	},

	filterRecipes: function (e) {
		var selectedIngredient = $(e.currentTarget).val() || arguments[1];

		if (selectedIngredient === 'all') {
			var filtered = allRecipes;
		}

		else {
			var filtered = allRecipes.filter(function (recipe) {
				return recipe.ingredients.some(function (ingredient) {
					return selectedIngredient === ingredient;
				});
			});
		}

		this.collection.set(filtered);
		// Update localstorage with selection.
		localStorage.setItem('ingredient', selectedIngredient);

	},

	serializeData: function () {
		return {
			allIngredients: this.allIngredients
		}
	}

});

module.exports = RecipeTable;
