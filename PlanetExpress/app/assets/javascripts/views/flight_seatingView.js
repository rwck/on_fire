var app = app || {};

app.Flight_view = Backbone.View.extend({

  model: app.Flight_item,

  el: "#table",

  events: {

    "click .seat-button": "seatClicked"
  },


  seatClicked: function(event) {
    el = "#table";

    $("#seating td").click(function (event) {
      if($(this).hasClass('taken-seat'))
          e.preventDefault();
      $("#seating td").removeClass('clicked')
      $(this).toggleClass('clicked');
      console.log("clicked")
    });

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

    console.log(seatsTaken[0].length);


    var numberSeatsTaken = seatsTaken[0].length;
    if (numberSeatsTaken === 0) {
      var seatSingPlu = "All seats are available "
    }
    else if (numberSeatsTaken === 1) {
      var seatSingPlu = " seat has been taken ";
    }
    else {
      var seatSingPlu = " seats have been taken  ";
    }

    console.log(numberSeatsTaken + seatSingPlu + "so far");

  },
})
