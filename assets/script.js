// Storing the questions 
var myQuestions = [
	{
		question: "Inside which HTML element do we put the JavaScript?",
		answers: {
			1: "scripting",
			2: "javascript",
			3: "script",
      4: "js"
		},
		correctAnswer: '3'
	},
	{
		question: "Where is the correct place to insert a JavaScript?",
		answers: {
			1: 'header',
			2: 'body',
			3: 'head',
      4: 'head and body'
		},
		correctAnswer: '2'
	},
  {
		question: "How do you create a function in JavaScript?",
		answers: {
			1: 'function myFunction()',
			2: 'function = myFunction()',
			3: 'function: myFunction()',
      4: 'var function(myFunction)'
		},
		correctAnswer: '1'
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
var writeWrong = document.getElementById("write-wrong");
var quizEnd = document.getElementById("quiz-end");
var startBtn = document.getElementById("start");
var nextBtn = document.getElementById("next");
var isDisplayingQuestion = false
var timeLeft = 51;
var i = 0;


// INITIALIZATION
function init(){
  questionNav.style.display="none";
  quizEnd.style.display="none";
  writeWrong.style.display="none";
  nextBtn.style.display="none";
}

// Function Countdown
function countdown() {
   
    // Using setInterval() method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {

      timeLeft--;
      // Displaying time left
      timerEl.textContent = "Timer: 00:" 
      if (timeLeft < 10) {
        timerEl.textContent =  timerEl.textContent + "0" + timeLeft;
      } else{
        timerEl.textContent =  timerEl.textContent + timeLeft;
      }
  
      if(timeLeft <= 0) {  // <-checking if time is up
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
    start.style.display="none";

       // DISPLAYING THE QUESTIONS
      i = 0;
      writeWrong.style.display="none";
      if (i < myQuestions.length && timeLeft >0) {
       
         diplayQuestion()

         //add event listener for answers
         answer1Container.addEventListener("click", checkRightAnswer);  
         answer2Container.addEventListener("click", checkRightAnswer); 
         answer3Container.addEventListener("click", checkRightAnswer); 
         answer4Container.addEventListener("click", checkRightAnswer); 
         i++;
        }else{
          next.style.display="none";
        }
 
}

function diplayQuestion(){
        questionContainer.textContent = myQuestions[i].question
        answer1Container.textContent = myQuestions[i].answers["1"]
        answer2Container.textContent = myQuestions[i].answers["2"]
        answer3Container.textContent = myQuestions[i].answers["3"]
        answer4Container.textContent = myQuestions[i].answers["4"]
}

function checkRightAnswer(answerNumber){
   if (answerNumber === myQuestions[i].correctAnswer){
       writeWrong.textContent = "Good Job - Corect"
   }else{
       writeWrong.textContent = "Not Quite"
       timeLeft = timeLeft -10
   }
   writeWrong.style.display="block";
   nextBtn.style.display="block";
}

// FUNTION TIME IS UP
  function timeIsUp(){
    questionNav.style.display="none";
    quizEnd.style.display="block";
    nextBtn.style.display="none";
  }


//CALLING INIT FUNCTION
init();

//add event listener for start button
startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", diplayQuestion);


