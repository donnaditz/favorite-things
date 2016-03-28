

$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    event.preventDefault();

    function splitString(sentenceInput, separator) {
      var sentenceArray = sentenceInput.split(separator);
    }

    var sentenceInput = $("input#sentence").val();

    var space = " ";

    splitString(sentenceInput, space);
    console.log(sentenceArray);



  });
});
