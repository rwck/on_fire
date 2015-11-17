var app = app || {};

app.Router = Backbone.Router.extend({

	routes: {
		"users": "testStuff",
		"*other": "testStuff"
	},

	initialize: function() {
		console.log("INITALIASING ROUTER");
	},

	testStuff: function() {
		// alert("blob");
		console.log("running the '/' route function");
	}

});
