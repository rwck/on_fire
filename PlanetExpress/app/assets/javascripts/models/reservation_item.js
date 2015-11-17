var app = app || {};

app.Reservation_item = Backbone.Model.extend({
	urlRoot: "/reservation",
	defaults: {
		seat_reserved: "1A",
		user_id: 1,
		flight_id: 1
	}
});

