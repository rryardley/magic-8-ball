$(document).ready(function(){

	var magic8Ball = {}; //Define object
	magic8Ball.listOfAnswers = ["Yes Definitely", "Absolutely Not", "It is Possible", "It is Unlikely", "Check Again Later", "It is Unclear", "Dream Bigger"]; //Create answers array

	$("#answer").hide(); //hide answer when page loads

	magic8Ball.shake = function(question){
		$("#8ball").effect("shake"); //ball shakes
		$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png"); //switch 8ball image from "8" to triangle
		$("#answer").fadeIn(4000); //fade in answer in 4 seconds
		var randomNumber = Math.random(); //Get random number between 0 and 1
		var randomNumberArray = [randomNumber * this.listOfAnswers.length]; //Create array with random number for each value of array
		var randomIndex = Math.floor(randomNumberArray); //Round down for each value of random array
		var randomAnswer = this.listOfAnswers[randomIndex]; //Get random answer from answer array
	$("#answer").text(randomAnswer);
	console.log("Question: " + question);
 	console.log("Answer: " + randomAnswer);
	};


	var buttonClick = function(){
		$("#answer").hide();
		$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");

//wait half second before prompt
		setTimeout(
			function() {
		var question = prompt("Ask a yes or no question!")
		magic8Ball.shake(question);
		}, 500);

	};

	$("#questionButton").click(buttonClick);

});
