
// get the button element
$("#btnAdd").on("click", showMessage);
<<<<<<< Updated upstream
$("#btnClear").on("click", function() {
    $(".student_card").empty();
} );

<<<<<<< Updated upstream
function showMessage() {    
    $(".student_card").text("this is some text")
    $(".student_card").append("this is more text")
=======
function showMessage() {
    $(".student_card").text("this is the message")
>>>>>>> Stashed changes
}
=======
$("#btnClear").on("click", function(){
    $(".student_card").empty();
    $(".student_card").css("background", "red");
});

function showMessage() {
//    alert("CLICK CLICK");
//    $(".student_card").append(" <p>Hello </p> ");
    $(".student_card").css("background", "blue");
    $(".student_card").text(" Hi! ");


    }

>>>>>>> Stashed changes


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