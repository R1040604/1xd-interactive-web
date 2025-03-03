/*
  __  .__                             
_/  |_|__| _____   ___________  ______
\   __\  |/     \_/ __ \_  __ \/  ___/
 |  | |  |  Y Y  \  ___/|  | \/\___ \ 
 |__| |__|__|_|  /\___  >__|  /____  >
               \/     \/           \/ 
*/

// 1 — start a timer and show a ⏰ in #clock after 10 seconds
let seconds = 0;
let timer = setInterval(() => {
  seconds++;
  document.getElementById("clock").innerHTML = seconds;
  if (seconds == 10) {
    clearInterval(timer);
    document.getElementById("clock").innerHTML = "⏰";
  }
}, 1000);

// 2 — click the start button to show a ticking clock in #timer that goes up every second
// clicking stop should clear and stop the timer and reset the clock to 0
document.getElementById("start").addEventListener("click", () => {
  let seconds = 0;
  let timer = setInterval(() => {
    seconds++;
    document.getElementById("timer").innerHTML = seconds;
  }, 1000);
  document.getElementById("stop").addEventListener("click", () => {
    clearInterval(timer);
    document.getElementById("timer").innerHTML = 0;
  });
});

// 3 — create an image gallery that shows a new image every 5 seconds and repeats that cycle
// use the images gallery1.jpg, gallery2.jpg, gallery3.jpg in the images/timers_intervals folder
// use only one img tag in the html and change its src attribute (#slideshow)
let images = ["gallery1.jpg", "gallery2.jpg", "gallery3.jpg"];
let i = 0;
setInterval(() => {
  document.getElementById(
    "slideshow"
  ).src = `../images/timers_intervals/${images[i]}`;
  i = (i + 1) % images.length;
}, 5000);