//waits until page is ready
$(document).ready(function() {
 



//slides down paragrph directly under image when img is clicked 
$("img").click(function(){
	$(this).next().children('p').slideDown();	 
});

//when card is clicked it is assigned a class (.highlight) which toggles on/off as clicked
//this one overrides one below
$(".card").click(function(){
    $(this).toggleClass("highlight");       //highlight is pink
});


//when card is clicked it is assigned a class (.highlight_stream) which toggles on/off as clicked
$(".card").click(function(){
    $(this).toggleClass("highlight_stream"); //highloight_stream is red
});

//cards not currently selected will be hidden when select_btn is clicked
$("#select_btn").click(function(){
    $(".card:not(.highlight)").hide();
});

//all cards will now be shown
$("#all_btn").click(function(){
    $(".card").show();
});
}); 

