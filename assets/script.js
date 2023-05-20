var timerEl = document.getElementById("countdown");
var explanation = document.getElementById("quiz-explain")
var question1 = document.getElementById("question-nav1")

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
  
  function startQuiz(){
    countdown();
    explanation.style.display="none";
    question1.style.display="block";
  }

  function timeIsUp(){

  }

//add event listener for start button
var startBtn = document.getElementById("start");
startBtn.addEventListener("click", startQuiz);

