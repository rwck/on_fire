var app = app || {};

app.Flight_listView = Backbone.View.extend({
  el: "#one",

  events: {
    "click #submit-button-1": "clickAlert"
  },

  initialize: function() {
    console.log("initialising flight list view function");
    this.template = _.template( $("#template-test").html(), {});

    this.render();
    console.log(this.model);
    this.$el.html(this.template());
  },

  render: function() {
    console.log(this.$el);
    app.airplaneList.fetch();
    console.log(app.airplaneList.models[0].attributes);
    // this.$el.html("<h1> Hello </h1>");
    this.template(this.model.attributes);
    console.log(this.template());
  },

  clickAlert: function() {
    // var value  = $("#input-box").get(value);
    var value = $("#input-box").val();
    // alert("button has been clicked! " + value);
    console.log(value);
    this.model.models[0].attributes.newValue = value;
    console.log(this.model.newValue);
    // this.model.save();
    console.log(this.model);
    // var testData = {number: 12, origin: "san fransisco", destination: "middle of Orion's Belt", airplane: 1};
    // console.log(testData);
    var myNewFlight = new app.Flight_item({number: 12, origin: "san fransisco", destination: "middle of Orion's Belt", airplane: 1});
    console.log(myNewFlight);
    myNewFlight.save();

    // this.model.models[0].attributes = testData;
    console.log(this.model.models[0].attributes);

    this.model.models[0].save();
    }
});
