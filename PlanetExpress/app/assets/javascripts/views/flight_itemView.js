//flight item view

var app = app || {};

app.Flight_ItemView = Backbone.View.extend({
  // el: "#output",
  tagName: "tr",
  // className: "flight-container",
  template: _.template($("#flight-template").html()),

  events: {
    "click .book-button": "onClickBook",
    "click .flight-details": "drawTable",
    "click .seat-button": "seatClicked"
  },

  render: function() {

    var templateResult = this.template(this.model.attributes);
    // this.$el.text(this.model.get("origin"));
    // this.$el.html(templateResult(this.model.toJSON()));
    console.log(this.model.attributes);
    console.log(templateResult);
    this.$el.html(templateResult);
    // this.$el.append($("<td/>"))

    // this.$el.find("td:last-child").append("<p>hi</p>");

    return this;
  },

  seatClicked: function(event) {
    console.log(this);
    alert(event.target.id);
  },

  onClickBook: function(event) {
    console.log("on booking click", this.model);
  },



  drawTable: function(event) {
    console.log(event.target.id);

    console.log("drawing table");
    var view = this;
    testview = this;

    var planeId = event.target.id;
    console.log(planeId);

    var thisFlightID = app.Flight_ItemView.searchResult[0].get("airplane").id

    var columns = app.Flight_ItemView.searchResult[0].get("airplane").column

    var rows = app.Flight_ItemView.searchResult[0].get("airplane").row

    var seatsTaken = app.reservationView.attributes.seat_reserved;
    console.log(seatsTaken);

    app.Flight_ItemView.searchResult

    var numberOfAvailableSeats = (app.Flight_ItemView.searchResult[0].get("airplane").column) * app.Flight_ItemView.searchResult[0].get("airplane").row;

    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var result = "";
    result += "<table border=1>";
    result += "<tbody>";
    for (var y = 0; y < columns; y++) {
      result += "<tr>";
      for (var x = 0; x < rows; x++) {
        result += "<td class='seat-button' id='" + (y + 1) + alphabet[x] + "'>";
        result += (y + 1) + alphabet[x];
        result += "</td>";
      }

      result += "</tr>";
    }
    result += "</tbody>";
    result += "</table>";
    // this.$el.html(result);
    $('#table').html(result);
    // console.log(result);
  },

});
