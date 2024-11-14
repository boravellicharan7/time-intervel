// Question-1
let a = document.getElementById("color")
setTimeout(() => {
    a.style.backgroundColor = "blue"
}, 5000)
function col() {
    setTimeout(() => {
        a.style.backgroundColor = "gray"
    }, 5000);
}

// Question-2
var message = setTimeout(mess, 2000)
function mess() {
    alert("welcome to world...")
    clearTimeout(message)
}

// Question-3
  let countdownValue = 10;
  document.getElementById("countdown").textContent = countdownValue;
  let countdownInterval = setInterval(() => {
      countdownValue--;
      document.getElementById("countdown").textContent = countdownValue;
      if (countdownValue <= 0) {
          clearInterval(countdownInterval);
          document.getElementById("countdown").textContent = "Time's up!";
      }
  }, 1000);


//   Question-4
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0'); 
    document.getElementById('clock').textContent = `${hours}:${minutes}`;
}
setInterval(updateClock, 1000); 
updateClock(); 