
var app = app || {};

app.User_item = Backbone.Model.extend({
	urlRoot: "/user",
	defaults: {
		name: "Fry",
		user_type: "admin"
	}
});
