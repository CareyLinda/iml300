/* 
  an array of objects where each
  object has a 'name' property and 
  a 'bgcolor' property  
*/  

var studentColorList = [{ name:"tatiana", bgcolor:"#e2f7fd"},
{ name:"davis", bgcolor:"#5500FF"},
{ name:"noelle", bgcolor:"#E5E5E5"},
{ name:"barbara", bgcolor:"#828282"},
{ name:"ryan", bgcolor:"#CC0000"},
{ name:"morgan", bgcolor:"#000000"},
{ name:"kate", bgcolor:"#111111"},
{ name:"james", bgcolor:"#FFC661"},
{ name:"paxton", bgcolor:"#F26722"},
{ name:"hannah", bgcolor:"#404040"},
{ name:"lily", bgcolor:"#6B6B6B"},
{ name:"janine", bgcolor:"#6499FF"},
{ name:"yang", bgcolor:"#4DDBFF"},
{ name:"alison", bgcolor:"#979BC5"},
{ name:"alyssa", bgcolor:"#CDFFF9"},
{ name:"audey", bgcolor:"#FF9900"},
{ name:"audrey", bgcolor:"#CCE0FF"},        
{ name:"maya", bgcolor:"#808080"},
{ name:"mark", bgcolor:"#7E89A7"},
{ name:"amanda", bgcolor:"#3434CB"},
{ name:"michelle", bgcolor:"#FFF000"},
{ name:"zoe", bgcolor:"#7EFFF4"}]     

var $tc = $tc = $("#testCard");

alert($tc.children().length);

$tc.css("#testCard").css("background","red");
$tc.append("#testCard").append("<p> look at this hotness</p>");
$tc.prepend("testCard").prepend(" <a href='http://duckduckgo.com'> Better Mo' private search</a> <br/> ")

alert($tc.children().length);
$tc.children().eq(3).text(" hey ");


//var $tc = $("#testCard");
//
////alert($tc.children().length);
//
//$tc.css("background", "red");
//$tc.append("<p> look at this jquery hotness</p>")
//$tc.prepend(" <a href='http://duckduckgo.com'> Better Mo' private search</a> <br/>  ")
//
////alert($tc.children().length);
//$tc.children().eq(3).text(" YO MAMA!!! ");

// creating an element in jQuery

//add an h2 to the results section

var resultElem = "<h1>Results</h1>";
var $card = $(".sc-1-4");

$("main").prepend(resultElem);

$(".sc-1-4").append("<div class='michelle student_card '></div><h2>michelle</h2>")

$(".sc-1-4").append("<div class='zoe student_card '></div><h2>zoe</h2>")

$(".sc-1-4").append("<div class='james student_card '></div><h2>tucker hiding as James</h2>")

$card.children().eq(1).remove();
//$card.empty();

console.log( $(".sc-1-4").children().length);