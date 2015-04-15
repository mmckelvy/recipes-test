var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var ingredientListTemplate = require('../../templates/ingredient_list.jade');


var IngredientList = Marionette.ItemView.extend({

	className: 'ingredient-list',
	template: ingredientListTemplate,

	serializeData: function () {
		
		return {
			ingredients: this.model.get('ingredients')
		}
	}
		


});

module.exports = IngredientList;