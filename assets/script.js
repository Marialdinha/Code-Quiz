// questions
var myQuestions = [
	{
		question: "Inside which HTML element do we put the JavaScript?",
		answers: {
			1: "scripting",
			2: "javascript",
			3: "script",
      4: "js"
		},
		correctAnswer: 3
	},
	{
		question: "Where is the correct place to insert a JavaScript?",
		answers: {
			1: "header",
			2: "body",
			3: "head",
      4: "head and body"
		},
		correctAnswer: 2
	},
  {
		question: "How do you create a function in JavaScript?",
		answers: {
			1: "function myFunction()",
			2: "function = myFunction()",
			3: "function: myFunction()",
      4: "var function(myFunction)"
		},
		correctAnswer: 1
	},
  {
		question: "Which element is not a void element in HTML?",
		answers: {
			1: "<br>",
			2: "<img>",
			3: "<hr>",
      4: "<ol>"
		},
		correctAnswer: 4
	},
  {
		question: "Which element is not a semantic element in HTML?",
		answers: {
			1: "<form>",
			2: "<body>",
			3: "<table>",
      4: "<article>"
		},
		correctAnswer: 2
	}
];

// defining variables
var timerEl = document.getElementById("countdown");
var explanation = document.getElementById("quiz-explain");
var questionNav = document.getElementById("question-nav1");
var questionContainer = document.getElementById("question_container");
var answer1Btn = document.getElementById("answer1_btn");
var answer2Btn = document.getElementById("answer2_btn");
var answer3Btn = document.getElementById("answer3_btn");
var answer4Btn = document.getElementById("answer4_btn");
var writeWrong = document.getElementById("write-wrong");
var quizEnd = document.getElementById("quiz-end");
var finalScore = document.getElementById("final-score");
var startBtn = document.getElementById("start");
var nextBtn = document.getElementById("next");
var areAllQuestionsAnswered = false
var totalCorectAnswers  = 0;
var answerNumber = 0;
var timeLeft = 51;
var i = 0;



// initialization
function init(){
  questionNav.style.display="none";
  quizEnd.style.display="none";
  writeWrong.style.display="none";
  nextBtn.style.display="none";
}

// functon countdown
function countdown() {
   
    // Using setInterval() method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {

      timeLeft--;
      // Displaying time left
      timerEl.textContent = "Timer: 00:";
      if (timeLeft < 10) {
        timerEl.textContent =  timerEl.textContent + "0" + timeLeft;
      } else{
        timerEl.textContent =  timerEl.textContent + timeLeft;
      }
  
       // checking if time is up or all qestions ae answerd
      if(timeLeft <= 0 || areAllQuestionsAnswered) { 
        clearInterval(timeInterval);
        timerEl.textContent = "Time is up";

        // Calling quiz finished function
        quizFinished();
       }
       
    },1000);
}
  
// Function StartQuiz
function startQuiz(){
    countdown();
    explanation.style.display="none";
    questionNav.style.display="initial";
    startBtn.style.display="none";

       // displaying the questions
      i = -1;
      displayQuestion()
     
 
}
// display question function
function displayQuestion(){
  i++;
     if (i < myQuestions.length) {

        writeWrong.style.display="none";
        nextBtn.style.display="none";
        answer1Btn.disabled = false;
        answer2Btn.disabled = false;
        answer3Btn.disabled = false;
        answer4Btn.disabled = false;

        questionContainer.textContent = myQuestions[i].question;
        answer1Btn.textContent = myQuestions[i].answers["1"];
        answer2Btn.textContent = myQuestions[i].answers["2"];
        answer3Btn.textContent = myQuestions[i].answers["3"];
        answer4Btn.textContent = myQuestions[i].answers["4"];
      } else{
        areAllQuestionsAnswered = true;
      }
}

function Btn1Pessed(){
  answerNumber = 1;
  checkRightAnswer()
}

function Btn2Pessed(){
  answerNumber = 2;
  checkRightAnswer()
}

function Btn3Pessed(){
  answerNumber = 3;
  checkRightAnswer()
}

function Btn4Pessed(){
  answerNumber = 4;
  checkRightAnswer()
}



function checkRightAnswer(){
   if (answerNumber === myQuestions[i].correctAnswer){
       writeWrong.textContent = "Good Job - Correct";
       totalCorectAnswers++;
   }else{
       writeWrong.textContent = "Not Quite - The correct answer is: " 
                              + myQuestions[i].answers[myQuestions[i].correctAnswer];
       timeLeft = timeLeft -5;
   }
   answer1Btn.disabled = true;
   answer2Btn.disabled = true;
   answer3Btn.disabled = true;
   answer4Btn.disabled = true;
   writeWrong.style.display="initial";
   nextBtn.style.display="initial";
}

// function quiz finished
  function quizFinished(){
    console.log("timeLeft " + timeLeft)
    finalScore.textContent = "Your final score is: " + totalCorectAnswers + " correct answers";

    questionNav.style.display="none";
    quizEnd.style.display="initial";
    nextBtn.style.display="none";
  }


// calling int fuction
init();

//add event listener to all buttons
startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", displayQuestion);
answer1Btn.addEventListener("click", Btn1Pessed); 
answer2Btn.addEventListener("click", Btn2Pessed); 
answer3Btn.addEventListener("click", Btn3Pessed); 
answer4Btn.addEventListener("click", Btn4Pessed); 



