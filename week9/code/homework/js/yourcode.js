//$("#funkygreen").on("click", function(){
//    $(this).parent().toggleClass("background", "green");
//});
$("#funkygreen").click(function(){
    $(this).toggleClass("background", "blue");
});

$("#depblue").on("click", function(){
    $(this).parent().css("background", "darkblue");
});

$("#hotpink").on("click", function(){
    $(this).parent().css("background", "hotpink");
});

$("#lime").on("click", function(){
    $(this).parent().css("background", "limegreen");
});
