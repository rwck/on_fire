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
  },

  render: function() {

    var templateResult = this.template(this.model.attributes);
    // this.$el.text(this.model.get("origin"));
    // this.$el.html(templateResult(this.model.toJSON()));
    this.$el.html(templateResult);
    // this.$el.append($("<td/>"))

    // this.$el.find("td:last-child").append("<p>hi</p>");

    return this;
  },

  onClickBook: function(event) {
    console.log("on booking click", this.model);
  },

  drawTable: function(event) {
    // console.log(event.target.id);
    // console.log(event.current.);
    console.log(event.target.id);

    console.log("drawing table");
    var view = this;
    testview = this;

    // this.collection.where({number: })

    var planeId = event.target.id;
    console.log(planeId);

    plane = app.airplaneList.where({id: parseInt(planeId)});
    console.log(plane);
    rows = plane[0].get("row")
    columns = plane[0].get("column")

    console.log(rows);
    console.log(columns);



    // var flightToDraw = this.collection.where({
    //   number: parseInt(id)
    // });

    // var airplaneId = something[0].get("airplane_id")

    // console.log(airplaneId);

    // airplaneLayout = app.airplaneList.where({
    //   id: airplaneId
    // })

    // console.log(airplaneLayout);

    // var row = airplaneLayout[0].get("row")
    // var column = airplaneLayout[0].get("column")
    //
    // console.log(row);
    //
    // console.log(column);

    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // var rows = row; // 1-30
    // var columns = column;
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
    console.log(result);
  },




});
