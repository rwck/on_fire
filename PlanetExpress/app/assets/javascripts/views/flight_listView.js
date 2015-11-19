var app = app || {};

app.Flight_listView = Backbone.View.extend({
  el: "#seating-view",

  events: {

    "click #flight-search-submit": "flightSearch",
    "click .seat-button": "seatClicked"
  },

  initialize: function() {
    console.log("initialising flight list view function");
    this.render();
  },

  render: function() {
    this.template = _.template($("#flight-search-template").html(), {});
    this.$el.html(this.template());
  },

  flightSearch: function() {
    console.log("start flight search ");
    var inputOrigin = $("#input-origin").val().toUpperCase();
    console.log("inputOrigin");
    var inputDestination = $("#input-destination").val().toUpperCase();
    console.log("collection", this.collection.length);
    var searchResult = this.collection.where({
      origin: inputOrigin,
      destination: inputDestination
    });

    app.Flight_ItemView.searchResult = searchResult;

    if (searchResult !== null) {
      var tmpl = _.template($("#flight-list-template").html());
      this.$el.html(tmpl({}));

      var rows = this.$(".flight-rows");
      console.log("search result1", searchResult);
      for (var i = 0; i < searchResult.length; i++) {
        console.log("search result is: ", searchResult[i]);
        var itemView = new app.Flight_ItemView({
          model: searchResult[i]
        });
        console.log("i is ", i);
        itemView.render();
        rows.append(itemView.el);
      };
    } else {
      console.log("no result");
    };

  },

  renderSeatingView: function() {
    console.log("flightsearch function is running");
    var inputOrigin = $("#input-origin").val().toUpperCase();
    var inputDestination = $("#input-destination").val().toUpperCase();

    // testing
    console.log(inputOrigin);
    console.log(inputDestination);

    searchResult = this.collection.where({
      origin: inputOrigin,
      destination: inputDestination
    });

    _.each(searchResult, function(result) {
      console.log(result.get("seating_array"))
    })

    var resultsHTML = ""
    var resultsView = this.$el
    _.each(searchResult, function(flight) {

      resultsHTML += "<span class='flight-number' id='" + flight.get("number") + "'>Flight number: " + flight.get("number") + "</span><br>"

      resultsView.html(resultsHTML);
    });


    this.airplanes = []
    var view = this;
    _.each(searchResult, function(result) {
        this.airplanes.push(result.get("airplane"))
      }, this) //

    console.log(this.airplanes);
  },

  seatClicked: function(event) {
    el = "#table";
    console.log(this);
    // alert("clicked!");
    alert(event.target.id);
  },

  drawTable: function(event) {
    // console.log(event.target.id);
    console.log("drawing table");
    var view = this;
    testview = this;

    // this.collection.where({number: })

    var id = event.target.id;
    console.log(id);

    something = app.flight_list.where({
      number: parseInt(id)
    })

    column = this.airplane.id;
    console.log(column);

    console.log(airplaneLayout);

    // var row = airplaneLayout[0].get("row")
    // var column = airplaneLayout[0].get("column")
    //
    // console.log(row);
    //
    // console.log(column);

    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var rows = row; // 1-30
    var columns = column;
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

  clickAlert: function() {
    var value = $("#input-box").val();
    console.log(value);
    this.model.models[0].attributes.newValue = value;
    console.log(this.model.newValue);
    console.log(this.model);

    var myNewFlight = new app.Flight_item({
      number: 12,
      origin: "san fransisco",
      destination: "middle of Orion's Belt",
      airplane: 1
    });

    console.log(myNewFlight);
    myNewFlight.save();
    // console.log(this.model.models[0].attributes);

    // this.model.models[0].save();
    this.$el.html("Saved!");
  },



});
