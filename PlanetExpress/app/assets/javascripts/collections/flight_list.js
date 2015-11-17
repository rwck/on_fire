var app = app || {};

app.Flight_list = Backbone.Collection.extend({
	url: "/flight_list",
	model: app.Flight_item
});