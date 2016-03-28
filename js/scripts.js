// EXERCISE 1 FAVORITE THINGS + Exercise 4 REFACTORED

$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var favoriteThingsArray = ["favoritething1", "favoritething2", "favoritething3", "favoritething4", "favoritething5"];

    favoriteThingsArray.forEach(function(favoriteThing) {
      console.log(favoriteThing);
      var userInput = $("#" + favoriteThing).val();
      console.log(userInput);
    });

    // var favoritething1 = $("input#favoritething1").val();
    // var favoritething2 = $("input#favoritething2").val();
    // var favoritething3= $("input#favoritething3").val();
    // var favoritething4 = $("input#favoritething4").val();
    // var favoritething5 = $("input#favoritething5").val();

    var favThings = [favoritething1, favoritething2, favoritething3,favoritething4,favoritething5];

    var newArray = [];

    newArray.push(favThings[1], favThings[0], favThings[2]);


    event.preventDefault();
  });
});

// END EXERCISE 1 FAVORITE THINGS


// EXERCISE 2 ICE CREAM
// $(document).ready(function() {
//   ["vanilla", "chocolate", "strawberry"].forEach(function(flavor){
//     $("ul").append("<li>" + flavor + "</li>");
//
//
//     //
//     event.preventDefault();
//   });
// });
