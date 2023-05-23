var goBackBtn = document.getElementById(go-back);
var clearBtn = document.getElementById(clear);

//add event lsitner to go back button
goBackBtn.addEventListener("click", function(event){
    event.preventDefault();
    location.href = "index.html";
  });

