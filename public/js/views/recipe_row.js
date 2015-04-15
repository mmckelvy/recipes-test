var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
var recipeRowTemplate = require('../../templates/recipe_row.jade');

var RecipeRow = Marionette.ItemView.extend({

	className: 'recipe-row',
	template: recipeRowTemplate,

	events: {
		'change .select-item': 'changeRecipe'
	},

	initialize: function () {
		this.listenTo(this.model, 'change', this.render(), this);
	},

	// Trigger a Backbone event; pass along the recipe for the triggering model.
	changeRecipe: function () {
		Backbone.trigger('recipe:changed', this.model);
	},

	serializeData: function () {
		return {
			name: this.model.get('name'),
			type: this.model.get('type'),
			cookTime: this.model.get('cook_time'),
			ingredients: this.model.get('ingredients').join(', ')
		}
	}

});

module.exports = RecipeRow;