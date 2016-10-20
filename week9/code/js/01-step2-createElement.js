
// get the button element
$("#btnAdd").on("click", showMessage);

function showMessage() {
    alert("YOU CLICKIN' ME ?!?! ");
}


$(".student_card").on("mouseover", showMessage2)
$(".student_card").on("mouseout", coolMeOff)

// Handler for mouseOver
function showMessage2() {
    alert( "GET OFF ME FOOL!!!");
    $(this).removeClass("cool");
    $(this).addClass("hot");
}

// Handler for mouseOut
function coolMeOff() {
    $(this).removeClass("hot").addClass("cool");
}