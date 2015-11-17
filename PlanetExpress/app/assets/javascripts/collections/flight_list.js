var app = app || {};

app.Flight_list = Backbone.Collection.extend({
	url: "/flights",
	model: app.Flight_item
});
