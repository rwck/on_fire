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

    var searchResultsContents = searchResult[0].attributes;

    theCollection = this.collection;
    console.log(theCollection.models);
    _.each(theCollection.models, function(array) {
      console.log(array.get("seating_array"));
    });

    testArray = theCollection.models[0].get("seating_array");
    console.log(testArray);

    string = "";


    for (var i = 0; i < testArray.length; i++) {
      for (var j = 0; j < testArray[i].length; j++) {
        testArray[i][j] = i.toString() + j.toString();
        // string += testArray[i].toString() + testArray[i][j].toString();
      }
    }
    console.log(testArray);

    var htmlString = ""

    _.each(testArray, function(row) {
      console.log(row);
      _.each(row, function(seat) {
        console.log(seat);
        htmlString += "<div class=\"seat-button\" id=\"" + seat + "\"> </div>"
      })
    })
    console.log(htmlString);



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

    console.log(string);

    $(this.$el).html(htmlString);





    // console.log(searchResult[0].attributes);
    // $(this.$el).html(searchResultsContents["id"]);
  },

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

  jQueryCreateGrid: function(x, y) {
    var $container = $("<div></div>").css("float","left");

    for (var i = 0; i < x; i++) {
      for (var j = 0; j < y; j++) {
        $("<div></div>").addClass("box").appendTo($container);
      }

      $("<div></div>").css("clear", "both").appendTo($container);
    }

    $(this.$el).html($container);

    // $container.appendTo($("body"));
  },



    createGrid: function(v) {
    var e = document.body;
    for (var i = 0; i < v; i++) {
      var row = document.createElement("div");
      row.className = "row";
      for (var x = 0; x <= v; x++) {
        var cell = document.createElement("div");
        cell.className = "gridsquare";
        cell.id = (i * v) + x;
        row.appendChild(cell);
      }
      e.appendChild(row);
    }
    document.getElementById("two").value = e.innerHTML;
  }
});
