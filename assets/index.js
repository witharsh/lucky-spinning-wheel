var circleRotate = document.getElementById("inner-circle");
var startBtn = document.getElementById("start-btn");
var winner = document.getElementById("winner");
var tryAgainBtn = document.getElementById("try-again-btn");
var winnerText = document.getElementById("winner");
const mediaQuery = window.matchMedia("(max-width: 499px)");

function start() {
  var tryAgainBtn = document.getElementById("try-again-btn");
  var rotateDeg = parseInt(Math.floor(Math.random() * (2160 - 1800) + 1800));
  var winnerCalculate = rotateDeg - 1800;

  circleRotate.style.transitionDuration = "7s";
  circleRotate.style.setProperty("--deg", "" + rotateDeg + "deg");
  startBtn.style.boxShadow = "0px 0px 20px 5px rgba(250, 250, 250, 1)";
  startBtn.disabled = true;

  if (mediaQuery.matches) {
    setTimeout(() => {
      tryAgainBtn.style.visibility = "visible";
      tryAgainBtn.disabled = false;
      tryAgainBtn.style.boxShadow = "0px 10px 5px black";
      startBtn.style.boxShadow = "0px 0px 15px 5px rgba(0, 0, 0, 1)";

      if (winnerCalculate > 0 && winnerCalculate < 45) {
        startBtn.innerHTML = 7;
        startBtn.style.fontSize = "20px";
        winnerText.innerHTML = "The Winner is 7";
      } else if (winnerCalculate > 45 && winnerCalculate < 90) {
        startBtn.innerHTML = 8;
        startBtn.style.fontSize = "20px";
        winnerText.innerHTML = "The Winner is 8";
      } else if (winnerCalculate > 90 && winnerCalculate < 135) {
        startBtn.innerHTML = 1;
        startBtn.style.fontSize = "20px";
        winnerText.innerHTML = "The Winner is 1";
      } else if (winnerCalculate > 135 && winnerCalculate < 180) {
        startBtn.innerHTML = 2;
        startBtn.style.fontSize = "20px";
        winnerText.innerHTML = "The Winner is 2";
      } else if (winnerCalculate > 180 && winnerCalculate < 225) {
        startBtn.innerHTML = 3;
        startBtn.style.fontSize = "20px";
        winnerText.innerHTML = "The Winner is 3";
      } else if (winnerCalculate > 225 && winnerCalculate < 270) {
        startBtn.innerHTML = 4;
        startBtn.style.fontSize = "20px";
        winnerText.innerHTML = "The Winner is 4";
      } else if (winnerCalculate > 270 && winnerCalculate < 315) {
        startBtn.innerHTML = 5;
        startBtn.style.fontSize = "20px";
        winnerText.innerHTML = "The Winner is 5";
      } else if (winnerCalculate > 315 && winnerCalculate < 360) {
        startBtn.innerHTML = 6;
        startBtn.style.fontSize = "20px";
        winnerText.innerHTML = "The Winner is 6";
      } else {
        startBtn.innerHTML = "None";
        winnerText.innerHTML = "There is no winner\n Please try again";
      }
    }, "7000");
  } else {
    setTimeout(() => {
      tryAgainBtn.style.visibility = "visible";
      tryAgainBtn.disabled = false;
      tryAgainBtn.style.boxShadow = "0px 10px 5px black";
      startBtn.style.boxShadow = "0px 0px 15px 5px rgba(0, 0, 0, 1)";

      if (winnerCalculate > 0 && winnerCalculate < 45) {
        startBtn.innerHTML = 7;
        startBtn.style.fontSize = "40px";
        winnerText.innerHTML = "The Winner is 7";
      } else if (winnerCalculate > 45 && winnerCalculate < 90) {
        startBtn.innerHTML = 8;
        startBtn.style.fontSize = "40px";
        winnerText.innerHTML = "The Winner is 8";
      } else if (winnerCalculate > 90 && winnerCalculate < 135) {
        startBtn.innerHTML = 1;
        startBtn.style.fontSize = "40px";
        winnerText.innerHTML = "The Winner is 1";
      } else if (winnerCalculate > 135 && winnerCalculate < 180) {
        startBtn.innerHTML = 2;
        startBtn.style.fontSize = "40px";
        winnerText.innerHTML = "The Winner is 2";
      } else if (winnerCalculate > 180 && winnerCalculate < 225) {
        startBtn.innerHTML = 3;
        startBtn.style.fontSize = "40px";
        winnerText.innerHTML = "The Winner is 3";
      } else if (winnerCalculate > 225 && winnerCalculate < 270) {
        startBtn.innerHTML = 4;
        startBtn.style.fontSize = "40px";
        winnerText.innerHTML = "The Winner is 4";
      } else if (winnerCalculate > 270 && winnerCalculate < 315) {
        startBtn.innerHTML = 5;
        startBtn.style.fontSize = "40px";
        winnerText.innerHTML = "The Winner is 5";
      } else if (winnerCalculate > 315 && winnerCalculate < 360) {
        startBtn.innerHTML = 6;
        startBtn.style.fontSize = "40px";
        winnerText.innerHTML = "The Winner is 6";
      } else {
        startBtn.innerHTML = "None";
        winnerText.innerHTML = "There is no winner\n Please try again";
      }
    }, "7000");
  }
}

function tryAgain() {
  tryAgainBtn.style.boxShadow = "0px 0px 0px black";

  if (mediaQuery.matches) {
    setTimeout(() => {
      startBtn.disabled = false;
      circleRotate.style.transitionDuration = "0s";
      circleRotate.style.setProperty("--deg", "" + 0 + "deg");
      startBtn.style.fontSize = "10px";
      startBtn.innerHTML = "SPIN";
      winnerText.innerHTML = "The Winner is _";
      tryAgainBtn.disabled = true;
    }, 400);
  } else {
    setTimeout(() => {
      startBtn.disabled = false;
      circleRotate.style.transitionDuration = "0s";
      circleRotate.style.setProperty("--deg", "" + 0 + "deg");
      startBtn.style.fontSize = "20px";
      startBtn.innerHTML = "SPIN";
      winnerText.innerHTML = "The Winner is _";
      tryAgainBtn.disabled = true;
    }, 400);
  }
}
