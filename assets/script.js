var timerEl = document.getElementById("countdown");

function countdown() {


    var timeLeft = 75;
  
    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
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
       }
    },1000);
  }
  
//add event listener for start button
var startBtn = document.getElementById("start");
startBtn.addEventListener("click", countdown);
