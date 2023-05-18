var timerEl = document.getElementById("countdown");

function countdown() {
    var timeLeft = 60;
  
    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      timeLeft--;
      timerEl.textContent = "Time: " + timeLeft;
  
      if(timeLeft === 0) { 
        clearInterval(timeInterval);
        timerEl.textContent = "Time is up";
       }
    },1000);
  }
  
  // STARTNG COUNTDOWN
  countdown();