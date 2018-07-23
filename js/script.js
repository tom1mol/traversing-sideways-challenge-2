//waits until page is ready
$(document).ready(function() {
 



//slides down paragrph directly under image when img is clicked 
$("img").click(function(){
	$(this).next().children('p').slideDown();	 
});


$(".card").click(function(){
    $(this).toggleClass("highlight");
})
}); 

