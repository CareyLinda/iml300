
// get the button element
$("#btnAdd").on("click", showMessage);
$("#btnClear").on("click", function() {
    $(".student_card").empty();
} );

function showMessage() {    
    $(".student_card").text("this is some text")
    $(".student_card").append("this is more text")
}


$(".student_card").on("mouseover", showMessage2)
$(".student_card").on("mouseout", coolMeOff)

// Handler for mouseOver
function showMessage2() {
    console.log( "GET OFF ME FOOL!!!");
    $(this).removeClass("cool");
    $(this).addClass("hot");
}

// Handler for mouseOut
function coolMeOff() {
    $(this).removeClass("hot").addClass("cool");
}