var groceriesAlpha = [];


$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var groceries = ["grocery1", "grocery2", "grocery3", "grocery4", "grocery5"];

    groceries.forEach(function(grocery) {
      console.log(grocery);
      var userInput = $("#" + grocery).val();
      console.log(userInput);
      groceriesAlpha.push(userInput);
    });

    groceriesAlpha.sort();

    var groceriesUpper = groceriesAlpha.map(function(grocery) {
      return grocery.toUpperCase();
    });

    console.log(groceriesUpper);

    event.preventDefault();
  });
});
    //
    // var grociesUpper = groceriesAlpha.map

    // var favoritething1 = $("input#favoritething1").val();
    // var favoritething2 = $("input#favoritething2").val();
    // var favoritething3= $("input#favoritething3").val();
    // var favoritething4 = $("input#favoritething4").val();
    // var favoritething5 = $("input#favoritething5").val();

    // var favThings = [favoritething1, favoritething2, favoritething3,favoritething4,favoritething5];
    //
    // var newArray = [];
    //
    // newArray.push(favThings[1], favThings[0], favThings[2]);
