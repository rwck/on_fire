var app = app || {};

app.Airplane_item = Backbone.Model.extend({
	urlRoot: "/airplane",
	defaults: {
		name: "this_airplane",
		row: 10,
		column: 10
	}
});