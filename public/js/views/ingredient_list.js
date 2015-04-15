var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var _ = require('lodash');
var IngredientModel = require('../models/ingredient_model');
var ingredientListTemplate = require('../../templates/ingredient_list.jade');

var IngredientList = Marionette.ItemView.extend({

	className: 'ingredient-list',
	template: ingredientListTemplate,

	initialize: function (options) {
		this.selectedRecipes = {};
		
		this.listenTo(Backbone, 'recipe:changed', function (recipe) {
			// Check if recipe is already in the this.selectedRecipes array.
			// Remove if in array, else add it.
			if (recipe.cid in this.selectedRecipes) {
				delete this.selectedRecipes[recipe.cid];
			}
			
			else {
				this.selectedRecipes[recipe.cid] = recipe.get('ingredients');
			}

			this.setIngredients(this.selectedRecipes);
		});

		this.listenTo(this.model, 'change', this.render, this);
	},

	// Returns a array of unique ingredients from an array of recipes.
	setIngredients : function (selectedRecipes) {
		var args = [];
		for (var key in selectedRecipes) {
			args.push(selectedRecipes[key])
		}
		
		// Concatenate the arrays.
		var allIngredients = [].concat.apply([], args);
		allIngredients.sort();

		var ingredients =  _.uniq(allIngredients, true); // Remove duplicate ingredients.
		this.model.set({'ingredients': ingredients});
	},

	serializeData: function () {

		return {
			ingredients: this.model.get('ingredients')
		}
	}
		


});

module.exports = IngredientList;