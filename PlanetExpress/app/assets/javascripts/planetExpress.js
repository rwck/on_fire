_.templateSettings = {
  evaluate: /\{\[([\s\S]+?)\]\}/g,
  interpolate: /\{\{([\s\S]+?)\}\}/g
};

var app = app || {};

app.init = function() {


  app.airplaneList = new app.Airplane_list();

  app.airplaneList.fetch({
    complete: function() {
      app.flight_list = new app.Flight_list();
      app.flight_list.fetch({
        complete: function() {
          app.flight_list_view = new app.Flight_listView({
                collection: app.flight_list
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
