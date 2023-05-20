// Creatimg questions 
var myQuestions = [
	{
		question: "Inside which HTML element do we put the JavaScript?",
		answers: {
			a: "scripting",
			b: "javascript",
			c: "script",
      d: "js",

		},
		correctAnswer: 'c'
	},
	{
		question: "Where is the correct place to insert a JavaScript?",
		answers: {
			a: 'header',
			b: 'body',
			c: 'head',
      d: 'head and body'
		},
		correctAnswer: 'b'
	},
  {
		question: "How do you create a function in JavaScript?",
		answers: {
			a: 'function myFunction()',
			b: 'function = myFunction()',
			c: 'function: myFunction()',
      d: 'var function(myFunction)'
		},
		correctAnswer: 'a'
	}
];

// Defining variables
var timerEl = document.getElementById("countdown");
var explanation = document.getElementById("quiz-explain");
var questionNav = document.getElementById("question-nav1");
var question = document.getElementById("question");
var Answer1 = document.getElementById("Answer1");
var Answer2 = document.getElementById("Answer2");
var Answer3 = document.getElementById("Answer3");
var Answer4 = document.getElementById("Answer4");

// Function Countdown
function countdown() {
    var timeLeft = 51;
  
    // Using setInterval() method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {

      timeLeft--;
      timerEl.textContent = "Timer: 00:" 
      if (timeLeft < 10) {
        timerEl.textContent =  timerEl.textContent + "0" + timeLeft;
      } else{
        timerEl.textContent =  timerEl.textContent + timeLeft;
      }
  
      if(timeLeft === 0) { 
        clearInterval(timeInterval);
        timerEl.textContent = "Time is up";

        // Calling Time Is Up function
        timeIsUp()
       }
       
    },1000);
  }
  
  // Function StartQuiz
  function startQuiz(){
    countdown();
    explanation.style.display="none";

    for (var i = 0; i <= myQuestions.length - 1; i++) {
      question.textContent = myQuestions{i}
     }

    questionNav.style.display="block";
  }

  function timeIsUp(){

  }

//add event listener for start button
var startBtn = document.getElementById("start");
startBtn.addEventListener("click", startQuiz);

