_.templateSettings = {
	evaluate : /\{\[([\s\S]+?)\]\}/g,
    interpolate : /\{\{([\s\S]+?)\}\}/g
};

var app = app || {};

app.init = function() {
	app.airplaneList= new app.Airplane_list();
	app.flight = new app.Flight_item;
	app.blob = new app.Flight_listView({model: app.flight});
	app.router = new app.Router();

	// app.view = new app.AppView(app.secrets);
	// app.secrets.fetch({
	// 	success: function() {
	// 		//request every 4sec
	// 		setInterval(function() {
	// 			app.secrets.fetch();
	// 		}, 4000);
	// 	},
	// 	error: function (){
	// 		console.log("error loading secerts");
	// 	}
	// });
};
