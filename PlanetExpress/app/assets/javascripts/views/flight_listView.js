var app = app || {};

app.Flight_listView = Backbone.View.extend({
  el: "#one",

  events: {
    "click .flight-number": "drawTable",

    "click #flight-search-submit": "flightSearch"
  },

  initialize: function() {
    console.log("initialising flight list view function");
    this.template = _.template($("#template-test").html(), {});
    this.render();
    console.log(this.model);
    this.$el.html(this.template());
  },

  render: function() {
    console.log(this.$el);
    app.airplaneList.fetch();
    this.template(this.collection.attributes);
    console.log(this.template());
  },

  flightSearch: function() {
    console.log("flightsearch function is running");
    var inputOrigin = $("#input-origin").val();
    var inputDestination = $("#input-destination").val();

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

      resultsHTML += "<span class='flight-number'>Flight number: " + flight.get("number") + "</span><br>"

      resultsView.html(resultsHTML);
    });


    this.airplanes = []
    var view = this;
    _.each(searchResult, function(result) {
      this.airplanes.push(result.get("airplane"))
    }, this) //

    console.log(this.airplanes);
  },


  drawTable: function() {
    var view = this;

    var id = "";

    _.each(this.airplanes,
      function(attribute) {
        console.log(attribute);
        var row = attribute.row;
        var column = attribute.column;
        console.log(row);
        console.log(column);

        var generatedSeatSnippet = "";
        var tableRowStartSnippet = "";
        var tableRowEndSnippet = ""

        var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var rows = row; // 1-30
        var columns = column;
        var result = "";
        result += "<table border=1>";
        result += "<tbody>";
        for (var y = 0; y < columns; y++) {
          result += "<tr>";
          for (var x = 0; x < rows; x++) {
            result += "<td id=" + (y + 1) + alphabet[x] + ">";
            result += (y + 1) + alphabet[x];
            result += "</td>";
          }

          result += "</tr>";
        }
        result += "</tbody>";
        result += "</table>";
        $('#table').html(result);
        console.log(result);
      })
  },



  // this is for testing

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
