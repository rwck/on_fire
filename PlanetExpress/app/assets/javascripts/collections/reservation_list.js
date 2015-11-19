var app = app || {};

app.Reservation_list = Backbone.Collection.extend({
	urlRoot: "/reservation",
	model: app.Reservation_item
});
