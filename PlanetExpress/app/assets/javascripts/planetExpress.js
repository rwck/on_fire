_.templateSettings = {
  evaluate: /\{\[([\s\S]+?)\]\}/g,
  interpolate: /\{\{([\s\S]+?)\}\}/g
};

var app = app || {};

app.init = function() {

  
  app.airplaneList = new app.Airplane_list();

  app.airplaneList.fetch({
    complete: function() {
      app.flight_list_one = new app.Flight_list();
      app.flight_list_one.fetch({
        complete: function() {
          app.flight_list_view_one = new app.Flight_listView({
            model: app.flight_list_one
          });
          app.flight_list_view_one = new app.Flight_listView({
            model: app.flight_list_one
          });
          app.router = new app.Router();
          Backbone.history.start();
        }
      });
    }
  })
}


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
