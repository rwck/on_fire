var app = app || {};

app.Airplane_list = Backbone.Collection.extend({
	url: "/airplanes",
	model: app.Airplane_item
});
