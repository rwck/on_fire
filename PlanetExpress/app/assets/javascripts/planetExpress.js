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
          app.flightview = new app.Flight_view();
          app.router = new app.Router();
          Backbone.history.start();
        }
      });
    }
  })
}
