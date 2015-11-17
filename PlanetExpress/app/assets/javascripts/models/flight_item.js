var app = app || {};

app.Flight_item = Backbone.Model.extend({
	urlRoot: "/flight",
	defaults: {
		number: 3,
		origin: "this_origin",
		destination: "this_destination",
		date: "1/1/2015".to_date,
		seating_array: [[0,0,0],
						[0,0,0],
						[0,0,0],],
		airplane_id: 1
	}
});
