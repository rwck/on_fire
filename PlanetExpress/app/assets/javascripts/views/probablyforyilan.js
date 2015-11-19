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

    console.log(event);

  },

  // drawTable: function(event) {
  //   // console.log(event.target.id);
  //   console.log("drawing table");
  //   var view = this;
  //   testview = this;
  //
  //   // this.collection.where({number: })
  //
  //   console.log(this_destination);

    // var id = event.target.id;
    // console.log(id);
    //
    // var flightToDraw = this.collection.where({
    //   number: parseInt(id)
    // });
    //
    // something = app.flight_list.where({
    // //   number: parseInt(id)
    // })

  //   var airplaneId = something[0].get("airplane_id")
  //
  //   console.log(airplaneId);
  //
  //   airplaneLayout = app.airplaneList.where({
  //     id: airplaneId
  //   })
  //
  //   console.log(airplaneLayout);
  //
  //   var row = airplaneLayout[0].get("row")
  //   var column = airplaneLayout[0].get("column")
  //
  //   console.log(row);
  //
  //   console.log(column);
  //
  //   var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //   var rows = row; // 1-30
  //   var columns = column;
  //   var result = "";
  //   result += "<table border=1>";
  //   result += "<tbody>";
  //   for (var y = 0; y < columns; y++) {
  //     result += "<tr>";
  //     for (var x = 0; x < rows; x++) {
  //       result += "<td class='seat-button' id='" + (y + 1) + alphabet[x] + "'>";
  //       result += (y + 1) + alphabet[x];
  //       result += "</td>";
  //     }
  //
  //     result += "</tr>";
  //   }
  //   result += "</tbody>";
  //   result += "</table>";
  //   // this.$el.html(result);
  //   $('#table').html(result);
  //   console.log(result);
  // },


})
