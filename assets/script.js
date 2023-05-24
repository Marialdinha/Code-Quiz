// creating array of objects to store questions
const myQuestions = [
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
var questionNav = document.getElementById("question-nav");
var questionContainer = document.getElementById("question-container");
var writeWrong = document.getElementById("write-wrong");
var quizEnd = document.getElementById("quiz-end");
var finalScore = document.getElementById("final-score");
var initialsEl= document.getElementById("initials-text");
var scoreSaved = document.getElementById("score-saved");
// buttons 
var startBtn = document.getElementById("start");
var nextBtn = document.getElementById("next");
var submitBtn = document.getElementById("submit");
var viewScoresBtn = document.getElementById("view_scores");
var goBackBtn = document.getElementById("go-back");
var clearBtn = document.getElementById("clear");
// values
var areAllQuestionsAnswered;
var totalCorectAnswers;
var timeLeft;
var i;


// initialization
function init() {
  // all not visible
  questionNav.style.display = "none";
  quizEnd.style.display = "none";
  writeWrong.style.display = "none";
  nextBtn.style.display = "none";
  submitBtn.style.display = "none";
  scoreSaved.style.display = "none";
  goBackBtn.style.display = "none";
  clearBtn.style.display = "none";
 
  // all visible
  explanation.style.display = "initial";
  startBtn.style.display = "initial";

  // all values
  areAllQuestionsAnswered = false;
  timeLeft = 51;
  totalCorectAnswers = 0;
  initialsEl.value= "";
  
}


// functon countdown
function countdown() {
  // Using setInterval() method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    timeLeft--;

    // Displaying time left
    timerEl.textContent = "Timer: 00:";
    if (timeLeft < 10) {
      timerEl.textContent = timerEl.textContent + "0" + timeLeft;
    } else {
      timerEl.textContent = timerEl.textContent + timeLeft;
    }

    // checking if time is up or all questions ae answerd
    if (timeLeft <= 0 || areAllQuestionsAnswered) {
      clearInterval(timeInterval);
      timerEl.textContent = "Time is up";

      // Calling quiz finished function
      quizFinished();
    }
  }, 1000);
}


// Function StartQuiz
function startQuiz() {
  countdown();
  explanation.style.display = "none";
  questionNav.style.display = "initial";
  startBtn.style.display = "none";

  // displaying the questions
  i = -1;
  displayQuestion();
}


// display question function
function displayQuestion() {
  i++;
  if (i < myQuestions.length) {
    writeWrong.style.display = "none";
    nextBtn.style.display = "none";
    submitBtn.style.display = "none";

    // Enabling answers
    disableAnswers(false);

    // Populating question and answers
    questionContainer.textContent = myQuestions[i].question;
    for(index=1; index<=4; index++ ){
      var answerBtn = document.getElementById(`answer${index}_btn`);
      answerBtn.textContent  = myQuestions[i].answers[index];
       }
  } else {
    areAllQuestionsAnswered = true;
  }
}


// Check Right Answer function
function checkRightAnswer(selectdAnswer) {
  if (selectdAnswer === myQuestions[i].correctAnswer) {
    writeWrong.textContent = "Good Job - Correct";
    totalCorectAnswers++;
  } else {
    writeWrong.textContent =
      "Not Quite - The correct answer is: " +
      myQuestions[i].answers[myQuestions[i].correctAnswer];
    timeLeft = timeLeft - 5;
  }

  // Disabling answers
  disableAnswers(true);

  writeWrong.style.display = "initial";
  nextBtn.style.display = "initial";
}


// Disabling answers function
function disableAnswers(btnState){   
  for(index=1; index<=4; index++ ){
    var answerBtn = document.getElementById(`answer${index}_btn`);
    answerBtn.disabled = btnState;
}
}


// function quiz finished
function quizFinished() {
  finalScore.textContent =
    "Your final score is: " + totalCorectAnswers + " correct answers";

  questionNav.style.display = "none";
  nextBtn.style.display = "none";
  quizEnd.style.display = "initial";
  submitBtn.style.display = "initial";
}


//  Save highscore to localstorage function
function saveHighScore() {
  //get value of input box
  var initialsEntered = initialsEl.value.trim();

  //making sure value is not empty
  if (initialsEntered !== ""){
      var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
 
      var newScore = {
          name: initialsEntered,
          score: totalCorectAnswers
      }
      
      highscores.push(newScore)
      console.log(highscores);
      localStorage.setItem('highscores', JSON.stringify(highscores));

      scoreSaved.style.display = "initial";
      goBackBtn.style.display = "initial";
      submitBtn.style.display = "none";
    }
}  


//  Retrieve highscore from localstorage function
function viewHighScore() {

  quizEnd.style.display = "none";
  submitBtn.style.display = "none";
  explanation.style.display = "none";
  startBtn.style.display = "none";
  goBackBtn.style.display = "initial";
  clearBtn.style.display = "initial";

  JSON.parse(localStorage.getItem("highscores")) || [];

}


// calling int fuction to start the process
init();


//add event listener to start, next, goBack, viewScore and submit buttons
startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", displayQuestion);
submitBtn.addEventListener("click", saveHighScore);
goBackBtn.addEventListener("click",init);
viewScoresBtn.addEventListener("click", viewHighScore);


//add event lsitner to all answer buttons
for(index=1; index<=4; index++ ){
    var answerBtn = document.getElementById(`answer${index}_btn`);
    answerBtn.addEventListener("click", function(event){
        event.preventDefault();
        let answerNumber = parseInt(event.target.getAttribute('id').split("_")[0].slice(-1));
        checkRightAnswer(answerNumber);
});
}

