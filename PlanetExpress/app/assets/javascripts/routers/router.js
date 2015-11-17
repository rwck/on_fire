var app = app || {};

app.Router = Backbone.Router.extend({

	initialize: function() {
		console.log("INITALIASING ROUTER");
	},

	routes: {
		"*other": "testStuff"
	},

	testStuff: function() {
		alert("blob");
		console.log("running the '/' route function");
	}

});
