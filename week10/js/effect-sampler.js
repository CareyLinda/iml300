var $card = $("#card1");

function itMightBeOverSoon() {
$("#card1")
    .animate( {width: "400px", left:"400px" }, 2000 )
    .slideUp(2000)
    .slideDown(200)
    .animate({width: "200px", left:"-=400px"},500, itMightBeOverSoon);
    
}

itMightBeOverSoon();


console.log($("select option:selected").val())

$("button").text("fade out");

$("button").on("click", function() {
    var currentOption = $("select").children(":selected").val();
    
    
    
    if( currentOption == "fade") {
    runFadeEffect();
    } else if( currentOption == "toggle") {
        runToggleEffect();
    } else if( currentOption == "slide") {
        runSlideEffect();
    } else if( currentOption == "slideToggle") {
        runSlideToggleEffect();
    } else if( currentOption == "show/hide") {
        
        runShowHideEffect();
    }
    
})

function runthisWhenDone() {
    console.log("I am done..now what?")
}


function runFadeEffect() {
    var visible = $("#card1").is(":visible");
    
    if(visible) {
        $("#card1").fadeOut( function() {
            $("button").text("fade in");
            
        }); 
    } else {
        $("#card1").fadeIn(runthisWhenDone); 
         $("button").text("fade out");
    }
}


function runToggleEffect() {
    $("#card1").toggle();
    return;
}


function runSlideEffect() {
    var visible = $("#card1").is(":visible");
    
    if(visible) {
        $("#card1").slideUp(2000);
    } else {
        $("#card1").slideDown(200);        
    }
}


function runSlideToggleEffect() {
    $("#card1").slideToggle();
}


function runShowHideEffect() {
    var visible = $("#card1").is(":visible");
    
    if(visible) {
        $("#card1").hide();
    } else {
        $("#card1").show();        
    }
}
