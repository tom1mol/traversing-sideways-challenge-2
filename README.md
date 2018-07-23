 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>jQuery</title>
    
</head><div id="container"
    <dvi class="card">
        <button id="button1" class="bottom_button">Button 1</button>
        <p id="para1" class="card_para">Once you join a Code Institute Bootcamp you will be taken on an accelerated contextualised learning path across 3 streams. Nothing is learned in isolation.We contextualise the content so that the knowledge and skills gained in each learning unit feeds into, and is expanded upon, within the next unit.The outputs of each stream will be a project.</p>
    </dvi>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="js/script.js"></script>
<body>
    
</body>
</html>


(challenge 2....code not working)
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>jQuery</title>
    <link href="css/style.css" rel="stylesheet" type="text/css">
    <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type="text/css">
	<link href='https://fonts.googleapis.com/css?family=Dosis' rel='stylesheet' type="text/css">
</head>
<body>
    <div id="container"
        <nav>
            <ul>
                <li id="logoNav">CODE INSTITUTE</li>
                <li id="all_btn">All</li>
                <li id="stream1_btn">Stream 1</li>
                <li id="stream2_btn">Stream 2</li>
                <li id="stream3_btn">Stream 3</li>
                <li id="select_btn">Select</li>
            </ul>
        </nav>
        <div class="card stream1">
            <img class="card_image" src="img/3.png">
            <div class="card_bottom">
                <h2 class="card_head id="head1">HTML</h2>   <!--in solution....id="head1" -->
				<p id="para1" class="card_para">Once you join a <a href="#">Code Institute</a> Bootcamp you will be taken on an accelerated contextualised learning path across 3 streams. Nothing is learned in <a href="#">isolation</a>.We contextualise the content so that the knowledge and skills gained in each learning unit feeds into, and is expanded upon, within the next unit.The outputs of each stream will be a project. </p>
		        <button class="bottom_button">Button</button>
            </div>
        </div>
        <div class="card stream3">
            <img class="card_image" src="img/1.png">
            <div class="card_bottom">
                <h2 class="card_head">MySql</h2>   
			    <p class="card_para">If you have <a href="#">questions</a> about your career in coding or simply want to meet the <a href="#">Code Institute</a> team, then come along to our next Careers Open Evening in Dublin</p>
			    <button class="bottom_button">Button</button>
		    </div>
        </div>
        <div class="card stream2">
            <img class="card_image" src="img/2.png">
            <div class="card_bottom">
                <h2 class="card_head">Python</h2>   
			    <p class="card_para">If you have <a href="#">questions</a> about your career in coding or simply want to meet the <a href="#">Code Institute</a> team, then come along to our next Careers Open Evening in Dublin</p>
			    <button class="bottom_button">Button</button>
		    </div>
        </div>
        <div class="card stream1">
            <img class="card_image" src="img/3.png">
            <div class="card_bottom">
                <h2 class="card_head">jQuery</h2>  
				<p class="card_para">Once you join a <a href="#">Code Institute</a> Bootcamp you will be taken on an accelerated contextualised learning path across 3 streams. Nothing is learned in <a href="#">isolation</a>.We contextualise the content so that the knowledge and skills gained in each learning unit feeds into, and is expanded upon, within the next unit.The outputs of each stream will be a project. </p>
		        <button class="bottom_button">Button</button>
            </div>
        </div>
        <div class="card stream3">
            <img class="card_image" src="img/4.png">
            <div class="card_bottom">
                <h2 class="card_head">Django</h2>   
			    <p class="card_para">The <a href="#">syllabus</a> has been developed to help you transform your <a href="#">career</a>. The summarised syllabus, below, provides you with a snapshop of what skills you will come away with. Feel free to contact us for more detail on what you will learn.</p>
			    <button class="bottom_button">Button</button>
		    </div>
        </div>
        <div class="card stream1">
            <img class="card_image" src="img/1.png">
            <div class="card_bottom">
                <h2 class="card_head">CSS</h2>   
			    <p class="card_para">The <a href="#">syllabus</a> has been developed to help you transform your <a href="#">career</a>. The summarised syllabus, below, provides you with a snapshop of what skills you will come away with. Feel free to contact us for more detail on what you will learn.</p>
			    <button class="bottom_button">Button</button>
		    </div>
        </div>
        <div id="my_footer">
            <p id="copyright">Copyright Information</p>
        </div>
    </div>
    
    <script src="https://code.jquery.com/jquery-3.2.1.js" 
    integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE=" 
    crossorigin="anonymous"></script>
    <script src="js/script.js"></script>
</body>
</html>



( javascript)
//waits until page is ready
$(document).ready(function() {
 



//slides down paragrph directly under image when img is clicked 
$("img").click(function(){
	$(this).next().children('p').slideDown();	 
});



}); 