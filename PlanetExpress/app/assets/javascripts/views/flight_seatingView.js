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

    var reservedSeats = app.reservationView.attributes.seat_reserved;

    var reservedSeatString = reservedSeats + event.target.id + ",";

    console.log(reservedSeatString);

    reservedSeats += event.target.id + ",";

    app.reservationView.attributes.seat_reserved += "," + reservedSeatString;

    app.reservationView.save({flight_id: 2, user_id: "1", seat_reserved: reservedSeats}, {patch: true});

    var seatsTaken = [];

    seatsTaken.push( app.reservationView.attributes.seat_reserved.split(","));

    console.log(seatsTaken);

    var numberSeatsTaken = seatsTaken.length;
    if (numberSeatsTaken === 1) {
      var seatSingPlu = " seat has ";
    }
    else {
      var seatSingPlu = " seats have ";
    }

    console.log(numberSeatsTaken + seatSingPlu + "been taken so far");



    // console.log(app.reservationView.attributes.seat_reserved);

    // model.save(app.reservationView.attributes.seat_reserved, {patch: true}); // doesn't work properly
    // app.reservationView.

  //  /reservations/:id(.:format) -- patch or post
  },
})
