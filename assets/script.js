// Creatimg questions 
var myQuestions = [
	{
		question: "Inside which HTML element do we put the JavaScript?",
		answers: {
			a: "scripting",
			b: "javascript",
			c: "script",
      d: "js"

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
var questionContainer = document.getElementById("question_container");
var answer1Container = document.getElementById("answer1_container");
var answer2Container = document.getElementById("answer2_container");
var answer3Container = document.getElementById("answer3_container");
var answer4Container = document.getElementById("answer4_container");

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
    questionNav.style.display="block";
    

    for (var i = 0; i <= myQuestions.length - 1; i++) {
        questionContainer.textContent = myQuestions[i].question
         answer1Container.textContent = myQuestions[i].answers["a"]
         answer2Container.textContent = myQuestions[i].answers["b"]
         answer3Container.textContent = myQuestions[i].answers["c"]
         answer4Container.textContent = myQuestions[i].answers["d"]
  }
}

  function timeIsUp(){

  }

//add event listener for start button
var startBtn = document.getElementById("start");
startBtn.addEventListener("click", startQuiz);

