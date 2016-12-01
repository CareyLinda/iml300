//A flag to let us know what state the div is in
var hidden = false;


$("#btnMove").on("click", function() {    
    if(!hidden) {
        $("#card1").hide();
        // toggle the flag because it is slid up now
        hidden = true;
    } else {
        $("#card1").show();
        // toggle the flag because it is slid down now
        hidden = false;
    }
})

$("#buttonOne").on("click", function() {
    if(!coloron) {
        $("#boxOne").css("background-color", "#7EFFF4");
        coloron = true;
        } else {
            $("#boxOne").css("background-color", "white");
            coloron = false;
        }
    
})
                   
                   
                   