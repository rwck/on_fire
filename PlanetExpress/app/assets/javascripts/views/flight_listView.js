var app = app || {};

app.Flight_listView = Backbone.View.extend({
  el: "#one",

  events: {
    "click #submit-button-1": "clickAlert"
  },

  initialize: function() {
    console.log("initialising flight list view function");
    this.template = _.template($("#template-test").html(), {});
    this.render();
    console.log(this.model);
    this.$el.html(this.template());
  },

  render: function() {
    console.log(this.$el);
    app.airplaneList.fetch();
    console.log(app.airplaneList.models[0].attributes);
    this.template(this.model.attributes);
    console.log(this.template());
  },

  // this is just for testing purposes at the moment

  clickAlert: function() {
    var value = $("#input-box").val();
    console.log(value);
    this.model.models[0].attributes.newValue = value;
    console.log(this.model.newValue);
    console.log(this.model);

    // end of stuff for testing

    // we will get rid of the code below

    var myNewFlight = new app.Flight_item({
      number: 12,
      origin: "san fransisco",
      destination: "middle of Orion's Belt",
      airplane: 1
    });

    // end of code to get rid of

    console.log(myNewFlight);
    myNewFlight.save();
    // console.log(this.model.models[0].attributes);

    // this.model.models[0].save();
    this.$el.html("Saved!");
  }
});
