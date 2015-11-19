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
    app.reservationView.attributes.seat_reserved += "," + bookedSeat;



    app.reservationView.save({flight_id: 2, user_id: "1", seat_reserved: event.target.id}, {patch: true})

    // model.save(app.reservationView.attributes.seat_reserved, {patch: true}); // doesn't work properly
    // app.reservationView.

  //  /reservations/:id(.:format) -- patch or post
  },
})
