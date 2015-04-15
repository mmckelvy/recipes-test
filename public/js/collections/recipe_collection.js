var Backbone = require('backbone');
var RecipeModel = require('../models/recipe_model');

var RecipeCollection = Backbone.Collection.extend({

	model: RecipeModel,

});

module.exports = RecipeCollection;