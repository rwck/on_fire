var app = app || {};

app.Airplane_list = Backbone.Collection.extend({
	url: "/airplane_list",
	model: app.Airplane_item
});