var Backbone = require('backbone');
var _ = require('lodash');

var IngredientModel = Backbone.Model.extend({

// Returns a array of unique ingredients from an array of recipes.
	setIngredients : function (recipes, prop) {
		var args = recipes.map(function (recipe) {
			return recipe[prop];
		})
		
		// Concatenate the arrays.
		var allIngredients = [].concat.apply([], args);
		allIngredients.sort();

		var ingredients =  _.uniq(allIngredients, true); // Remove duplicate ingredients.
		this.set({'ingredients': ingredients});
	}

});

module.exports = IngredientModel;