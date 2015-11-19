var app = app || {};

app.Flight_view = Backbone.View.extend({

  model: app.Flight_item,

  el: "#table",

  events: {

    "click .seat-button": "seatClicked"
  },

  seatClicked: function(event) {
    el = "#table";
    console.log(this);
    // alert("booo!")
    var bookedSeat = event.target.id;
    console.log(bookedSeat);
  },

})
