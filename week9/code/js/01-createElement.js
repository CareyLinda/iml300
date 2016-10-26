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

var $tc = $("#testCard");
$tc.css("background", "aliceblue");
$tc.append("<p> look at this jquery hotness</p>");
$tc.prepend("<a href='http://google.com'>Google></a> </br>");

alert($tc.children().length);


// creating an element in jQuery

//add an h2 to the results section
var resultElem = "<h1>Results</h1>";

$("main").prepend(resultElem);

$(".sc-1-4").append("<div class='michelle student_card '>michelle</div>")

$(".sc-1-4").append("<div class='zoe student_card '>zoe</div>")

console.log( $(".sc-1-4").children().length);