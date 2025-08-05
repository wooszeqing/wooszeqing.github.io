//target all elements to save to constants
const page1btn = document.querySelector("#page1btn");
const page2btn = document.querySelector("#page2btn");
const page3btn = document.querySelector("#page3btn");
const page4btn = document.querySelector("#page4btn");
const page1 = document.querySelector("#page1");
const page2 = document.querySelector("#page2");
const page3 = document.querySelector("#page3");
const page4 = document.querySelector("#page4");

function hideall() { //function to hide all pages
    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "none";
    page4.style.display = "none";
}

/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1btn.addEventListener("click", function () {
    hideall(); // we don't know which page is shown, so hideall
    page1.style.display = "block";
});
page2btn.addEventListener("click", function () {
    hideall();
    page2.style.display = "block";
});
page3btn.addEventListener("click", function () {
    hideall();
    page3.style.display = "block";
});
page4btn.addEventListener("click", function () {
    hideall();
    page4.style.display = "block";
});
hideall(); // call hideall function to hide all pages when site loads
page1.style.display = "block"; // page 1 shows when website loads

// quiz
const btnComplete = document.querySelector("#btnComplete");
const scoreDisplay = document.querySelector("#score");
const correctAns = {
    q1: "They have a tail that extends horizontally",
    q2: "2",
    q3: "A place where the fossils of whale ancestors lies",
    q4: "The IWC placed a global ban on commercial whaling in 1986, which every country followed"
};
// function to check answer
function CheckAns() {
    let score = 0;

    const q1 = document.querySelector("input[name='q1']:checked").value;
    if (q1 === correctAns.q1) score++;

    const q2 = document.querySelector("input[name='q2']:checked").value;
    if (q2 === correctAns.q2) score++;

    const q3 = document.querySelector("input[name='q3']:checked").value;
    if (q3 === correctAns.q3) score++;

    const q4 = document.querySelector("input[name='q4']:checked").value;
    if (q4 === correctAns.q4) score++;

    scoreDisplay.textContent = `You scored ${score} out of 4.`;
}

btnComplete.addEventListener("click", CheckAns); // button to call function

const whale = document.getElementById("whale");
const soundEffect = new Audio("../webdevA2/audio/yippee.mp3");
let score = 0;

function moveWhale() {
    const gameArea = document.getElementById("gameArea");
    const rect = gameArea.getBoundingClientRect(); // Get actual size
    const whaleWidth = whale.offsetWidth;
    const whaleHeight = whale.offsetHeight;

    const maxX = rect.width - whaleWidth;
    const maxY = rect.height - whaleHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    whale.style.left = x + "px";
    whale.style.top = y + "px";
}

setInterval(moveWhale, 1000);

whale.addEventListener("click", function () {
    score++;
    document.getElementById("gameScore").textContent = "Score: " + score;
    moveWhale();
    soundEffect.play();
});

moveWhale(); // placed here so it starts moving immediately instead of moving after the first click

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.querySelector("#navMenu");

    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("show");
    });

    // Optional: close menu when a button is clicked (on mobile)
    const navButtons = navMenu.querySelectorAll("button");
    for (let i = 0; i < navButtons.length; i++) {
        navButtons[i].addEventListener("click", function () {
            navMenu.classList.remove("show");
        });
    }
});

document.getElementById("fullscreenBtn").addEventListener("click", function () {
    const el = document.documentElement;

    if (el.requestFullscreen) {
        el.requestFullscreen();
    } else if (el.webkitRequestFullscreen) { // Safari
        el.webkitRequestFullscreen();
    } else if (el.msRequestFullscreen) { // IE/Edge
        el.msRequestFullscreen();
    }
});

document.getElementById("exitFullscreenBtn").addEventListener("click", function () {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { // Safari
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
    }
});