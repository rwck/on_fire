var app = app || {};

app.Flight_listView = Backbone.View.extend({
  el: "#one",

  events: {
    // first line is for testing(yilan)
    // "click #submit-button-1": "clickAlert",
    //
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

    var searchResult = this.collection.where({
      origin: inputOrigin,
      destination: inputDestination
    });

    // this is for testing

    var searchResultsContents = searchResult[0].attributes;


//  this is for testing
    theCollection = this.collection;
    console.log(theCollection);
    console.log(theCollection.models);
    _.each(theCollection.models, function(array) {
      console.log(array.get("seating_array"));
    });
  },

  // this is for testing - it doesn't work properly yet

  drawGrid: function() {
    console.log(this);
    var collectionModels = app.flight_list_view.models

    console.log(collectionModels);
    // seatArray = theCollection.models[0].get("seating_array");
    // console.log(testArray);
    //
    // var tableRowStart = "";
    // var tableRowFinish = "";
    // if ($.inArray(row, seatArray) === 0) {
    //   tableRowStart += "<tr>";
    // }
    // if ($.inArray(row, seatArray) === seatArray.length) {
    //   tableRowFinish += "</tr>";
    // }



    // for (var row = 0; i < seatArray.length; row++) {
    //   for (var seat = 0; seat < seatArray[i].length; seat++) {
    //     seatArray[row][seat] = row.toString() + seat.toString();
    //   }
    // }


    // console.log(testArray);

    // var htmlString = "";
    // var finalHtmlString = "";
    //
    // _.each(testArray, function(row) {
    //   console.log(row);
    //   _.each(row, function(seat) {
    //     console.log(seat);
    //     htmlString += "<div class=\"seat-button\" id=\"" + seat + "\"> </div>"
    //   })
    // })


    // finalHtmlString += tableRowStart + htmlString + tableRowFinish
    // console.log(htmlString);
    //


    //
    // _.each(testArray, function(column) {
    //   console.log(column);
    //   console.log(_.indexOf(testArray, column));
    //   _.each(column, function(row) {
    //     console.log(_.indexOf(column, row));
    //   })
    // _.each(column, function(row) {
    //   string += column.toString();

    // _.indexOf(testArray, column).toString();

    //  + _.indexOf(column, row).toString();

    // });

    // console.log(string);
    //
    // $(this.$el).html(htmlString);





    // console.log(searchResult[0].attributes);
    // $(this.$el).html(searchResultsContents["id"]);
  },

  // this is for testing 

  clickAlert: function() {
    var value = $("#input-box").val();
    console.log(value);
    this.model.models[0].attributes.newValue = value;
    console.log(this.model.newValue);
    console.log(this.model);

    // end of stuff for testing

    // we will get rid of the code below

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
