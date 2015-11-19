var app = app || {};

app.Reservation_item = Backbone.Model.extend({
	urlRoot: "/reservations",
	defaults: {
		seat_reserved: "",
		user_id: 0,
		flight_id: 0
	}
});
