// EXERCISE 1 FAVORITE THINGS
//
// $(document).ready(function() {
//   $("#blanks form").submit(function(event) {
//     var favoritething1 = $("input#favoritething1").val();
//     var favoritething2 = $("input#favoritething2").val();
//     var favoritething3= $("input#favoritething3").val();
//     var favoritething4 = $("input#favoritething4").val();
//     var favoritething5 = $("input#favoritething5").val();
//
//     var favThings = [favoritething1, favoritething2, favoritething3,favoritething4,favoritething5];
//
//     var newArray = [];
//
//     newArray.push(favThings[1], favThings[0], favThings[2]);
//
//     document.write(
//       "<ul>"
//
//     event.preventDefault();
//   });
// });
//
// END EXERCISE 1 FAVORITE THINGS


// EXERCISE 2 ICE CREAM
$(document).ready(function() {
  ["vanilla", "chocolate", "strawberry"].forEach(function(flavor){
    // $("ul").append("<li>" + flavor + "</li>");
    $("#result").text(flavor);


    //
    // event.preventDefault();
  });
});
