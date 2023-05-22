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
var answerBtn_1 = document.getElementById("answer1_btn");
var answerBtn_2 = document.getElementById("answer2_btn");
var answerBtn_3 = document.getElementById("answer3_btn");
var answerBtn_4 = document.getElementById("answer4_btn");
var writeWrong = document.getElementById("write-wrong");
var quizEnd = document.getElementById("quiz-end");
var finalScore = document.getElementById("final-score");
var startBtn = document.getElementById("start");
var nextBtn = document.getElementById("next");
var submitBtn = document.getElementById("submit");
var initialsEl= document.getElementById("initials-text");
var isAllQuestionsAnswered = false;
var totalCorectAnswers = 0;
var timeLeft = 51;
var i = 0;

// initialization
function init() {
  questionNav.style.display = "none";
  quizEnd.style.display = "none";
  writeWrong.style.display = "none";
  nextBtn.style.display = "none";
  submitBtn.style.display = "none";
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
    if (timeLeft <= 0 || isAllQuestionsAnswered) {
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

    disableAnswers(false);

    questionContainer.textContent = myQuestions[i].question;
    answerBtn_1.textContent = myQuestions[i].answers["1"];
    answerBtn_2.textContent = myQuestions[i].answers["2"];
    answerBtn_3.textContent = myQuestions[i].answers["3"];
    answerBtn_4.textContent = myQuestions[i].answers["4"];
  } else {
    isAllQuestionsAnswered = true;
  }
}

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

  disableAnswers(true);

  writeWrong.style.display = "initial";
  nextBtn.style.display = "initial";
}

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

//  Save highscore to localstorage
function saveHighScore() {
  //get value of input box
  var initialsEntered = initialsEl.value.trim();

  //making sure value is not empty
  if (initialsEntered !== ""){
      var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
  
      var newScore = {
          name: initialsEntered,
          score: totalCorectAnswers
      }
      
      highscores.push(newScore)
      window.localStorage.setItem('highscores', JSON.stringify(highscores));
      window.location.href = "highscores.html";


      // let localStorageData = JSON.parse(localStorage.getItem('quizScore'))
      // if (highscores != null){
      //   highscores.push(highscores)
      // }else{
      //      localStorageData = []
      //      localStorageData.push(highscores)
      // }

      //  localStorage.setItem('quizScore', JSON.stringify(localStorageData))
}

// calling int fuction
init();

//add event listener to start, next and submit buttons
startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", displayQuestion);
submitBtn.addEventListener("click", saveHighScore);

//add event lsitner to all answer buttons
for(index=1; index<=4; index++ ){
    var answerBtn = document.getElementById(`answer${index}_btn`);
    answerBtn.addEventListener("click", function(event){
        event.preventDefault();
        let answerNumber = parseInt(event.target.getAttribute('id').split("_")[0].slice(-1));
        checkRightAnswer(answerNumber);
})
}
