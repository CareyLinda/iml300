var coloronOne = false;
var coloronTwo = false;
var coloronThree = false;
var coloronFour = false;


$("#buttonOne").on("click", function() {
    if(!coloronOne) {
    $("#boxOne").css("background-color","#7EFFF4");
        coloronOne = true;
    } else {
        $("#boxOne").css("background-color", "white");
        coloronOne = false;
      }
})

$("#buttonTwo").on("click", function() {
    if(!coloronTwo) {
    $("#boxTwo").css("background-color","#ACF0F2");
        coloronTwo = true;
    } else {
        $("#boxTwo").css("background-color", "white");
        coloronTwo = false;
        }
})
    

$("#buttonThree").on("click", function() {
    if(!coloronThree) {
    $("#boxThree").css("background-color","#CDFFF9");
        coloronThree = true;
    } else {
        $("#boxThree").css("background-color", "white");
        coloronThree = true;
    }
}) 


$("#buttonFour").on("click", function() {
    if(!coloronFour) {
    $("#boxFour").css("background-color","#979BC5");
        coloronFour = true
    } else {
        $("#boxFour").css("background-color", "white");
        coloronFour = true;
        }
}) 