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
    alert("button has been clicked! " + value);
    console.log(value);
    this.model.newValue = value;
    console.log(this.model.newValue);
    }
});
