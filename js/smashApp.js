$(".buttonSetMain").hide();
$(".buttonSet1").hide();
$(".points").hide();
$(".buttonSetMain").fadeIn();
$(".question").hide();

var questionCounter;

function forGlory(){
	$(".buttonSetMain").fadeToggle();
	$(".buttonSet1").fadeToggle();
	$(".points").fadeIn();
	$(".question").fadeIn();
	$(".select").fadeToggle();
	var questionCounter = 1;
	document.getElementById("questionNumber").innerHTML=questionCounter;
}

/*List of questions*/
	var forGloryQuestions =	[
						"What frame does Shulk's nair come out on?",
						"What frame does Fox's utilt come out on?",
						"For which frames are Ryu's True Shoryuken invincible on?"
					];
	/*This variable is the container for the question currently being asked*/
	var currentFGQuestion;
	
	/*These variables contain previous questions so that they may be used when determining the next question*/
	var question1;
	var question2;
	var question3;
	var question4;
	var question5;
	var question6;
	var question7;
	var question8;
	var question9;
	var question10;
	
	/*This variable keeps track of how many questions have been asked*/
	
	
	/*This variable keeps track of points*/
	var points = 0;
	
	/*This variable contains all possible answers to questions*/
	var answers = 	[
						"Frame 13", "Frame 7", "Frame 10",
						"Frame 3", "Frame 4", "Frame 5",
						"Frames 3 to 5", "Frames 1 to 6", "Frames 2 to 7"
					]
	/*Declaring variables for the choices*/				
	var choice1;
	var choice2;
	var choice3;
	
	
	/*Determines the question that will be asked*/
	
	
	if (questionCounter = 1){
		var currentFGQuestion = forGloryQuestions[Math.floor((Math.random() * forGloryQuestions.length) + 0)];
		question1 = currentFGQuestion;
	}
	else if (questionCounter = 2){
		var currentFGQuestion = forGloryQuestions[Math.floor((Math.random() * forGloryQuestions.length) + 0)];
		question2 = currentFGQuestion;
	}
	else if (questionCounter = 3){
		question3 = currentFGQuestion;
	}
	else if (questionCounter = 4){
		question4 = currentFGQuestion;
	}
	else if (questionCounter = 5){
		question5 = currentFGQuestion;
	}
	else if (questionCounter = 6){
		question6 = currentFGQuestion;
	}
	else if (questionCounter = 7){
		question7 = currentFGQuestion;
	}
	else if (questionCounter = 8){
		question8 = currentFGQuestion;
	}
	else if (questionCounter = 9){
		question9 = currentFGQuestion;
	}
	else if (questionCounter = 10){
		question10 = currentFGQuestion;
	}
	
	/* "What frame does Shulk's nair come out on?" */
	if(currentFGQuestion == forGloryQuestions[0]){
		var choice1 = answers[0];
		var choice2 = answers[1];
		var choice3 = answers[2];
		
		document.getElementById("ansChecker").innerHTML=currentFGQuestion;
		document.getElementById("option1").innerHTML=choice1;
		document.getElementById("option2").innerHTML=choice2;
		document.getElementById("option3").innerHTML=choice3;
		
		function ansButton1(){
			document.getElementById("ansChecker").innerHTML = "Correct!";
			$(".buttonSet1").fadeOut();
			points = points+1;
			forGloryQuestions.splice(forGloryQuestions[0])
			questionCounter = questionCounter+1;
			document.getElementById("pointCount").innerHTML = points;
		}
		function ansButton2(){
			document.getElementById("ansChecker").innerHTML = "Incorrect!";
			forGloryQuestions.splice(forGloryQuestions[0])
			questionCounter = questionCounter+1;
			$(".buttonSet1").fadeOut();
		}
		function ansButton3(){
			document.getElementById("ansChecker").innerHTML = "Incorrect!";
			forGloryQuestions.splice(forGloryQuestions[0])
			questionCounter = questionCounter+1;
			$(".buttonSet1").fadeOut();
		}
		