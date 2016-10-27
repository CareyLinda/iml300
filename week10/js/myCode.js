var up = false;
$("#btnMove").on("click", function() {    
    if(!up) {
        $("#card1").slideUp();
        up = true;
    } else {
        $("#card1").slideDown();
        up = false;
    }
})