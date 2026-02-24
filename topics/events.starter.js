/*
 _____                _       
|  ___|              | |      
| |____   _____ _ __ | |_ ___ 
|  __\ \ / / _ \ '_ \| __/ __|
| |___\ V /  __/ | | | |_\__ \
\____/ \_/ \___|_| |_|\__|___/
                                                           
*/

// 1 — Click on the button and show an alert()
// hint: first select the button, then add an event listener to it
const btn = document.querySelector("button")
btn.addEventListener("click", ()=>{
    alert("Button clicked!");
})
// 2 — Hover over the square (#zone1) and change its background color

function changeBackground() {
    const rndCol = `rgb(
        ${Math.floor(Math.random() * 255)},
        ${Math.floor(Math.random() * 255)},
        ${Math.floor(Math.random() * 255)}
    )`;
    document.querySelector("#zone1").style.backgroundColor = rndCol;
}

  const zone1 = document.querySelector("#zone1");
  zone1.addEventListener("mouseover", changeBackground);
// 3 — Click on the link to display the hidden Message
// hint: first see how the message is hidden, then do the opposite
// hint2: prevent the default behavior of the link by using .preventDefault()
const link = document.querySelector("a");
const hiddenMessage = document.querySelector("#hiddenMessage");


link.addEventListener("click", (event) => {
    event.preventDefault();
    hiddenMessage.style.display = "block";
});

// 4 — Similar to question number 2, this time use event bubbling to change the background color of the squares in #bubbleZone
// hint: with event bubbling you can select the parent element and listen for events on its children to avoid adding multiple event listeners
if (event.target !== event.currentTarget) {
    const color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    event.target.style.backgroundColor = color;
  }
const bubbleZone = document.querySelector("#bubbleZone");
bubbleZone.addEventListener("mouseover", changeColor);

// 5 — Bonus: use mouseout to change the background color back to the original one on the squares in question 2 or 4
