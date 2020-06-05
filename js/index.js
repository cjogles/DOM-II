//vivint code challenge

// create countdown timer html structure
var htmlString =
  "<div class='countdown-message'> <p class='countdown-message-p'>Extended: Memorial Day Sale Ends</p> </div> <div class='timebox-wrapper'> <div class='timebox'> <div class='timemeasure'><p class='days timeP'></p></div> <div class='timename'>days</div> </div> <div class='timebox'> <div class='timemeasure'><p class='hours timeP'></p></div> <div class='timename'>hours</div> </div> <div class='timebox'> <div class='timemeasure'><p class='mins timeP'></p></div> <div class='timename'>minutes</div> </div> <div class='timebox'> <div class='timemeasure'><p class='secs timeP'></p></div> <div class='timename'>seconds</div> </div> </div>";
let countDown = document.createElement("section");
countDown.innerHTML = htmlString;

// add class to countdown wrapper and add inline style
countDown.setAttribute("class", "countdown-section");
countDown.style.cssText =
  "display: flex; justify-content: center; align-items: center; height: 10rem; width: 100%; background: #2DC2D7";

// target elements inside countdown container for styling and future countdown logic
let countDownMessageContainer = document.getElementsByClassName("countdown-message");
let countDownMessage = document.getElementsByClassName("countdown-message-p");
let timeBoxWrapper = document.getElementsByClassName("timebox-wrapper");
let timeBox = document.getElementsByClassName("timebox");
let timeMeasure = document.getElementsByClassName("timemeasure");
let days = document.getElementsByClassName("days");
let hours = document.getElementsByClassName("hours");
let mins = document.getElementsByClassName("mins");
let secs = document.getElementsByClassName("secs");
let timeName = document.getElementsByClassName("timename");
let timeP = document.getElementsByClassName("timeP");

// append countdown timer to html element that lives above the space you want countdown to live 
let beforeDiv = document.getElementsByClassName("hero-container").item(0);
beforeDiv.append(countDown);

// initialize time boxes with value of ... before counter starts
for (let i = 0; i < timeBox.length; i++) {
  if (days[i] !== undefined && mins[i] !== undefined) {
    days[i].innerHTML = "...";
    hours[i].innerHTML = "...";
    mins[i].innertHTML = "...";
    secs[i].innerHTML = "...";
  }
}

// implement timer
let countUntil = new Date().setHours(23, 59, 59, 999);
let x = setInterval(function () {
  // Get today's date and time then calculate the distance, days, hours, mins, secs, etc.
  let now = new Date().getTime();
  let distance = countUntil - now;
  let countDays = Math.floor(distance / (1000 * 60 * 60 * 24));
  let countHours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let countMins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let countSecs = Math.floor((distance % (1000 * 60)) / 1000);
  // Output the result in the timeboxes accordingly
  days[0].innerHTML = countDays;
  hours[0].innerHTML = countHours;
  mins[0].innerHTML = countMins;
  secs[0].innerHTML = countSecs;
  // If the count down is over, write some text in the count down message element
  if (distance < 0) {
    clearInterval(x);
    document.getElementsByClassName("countDownMessage").innerHTML =
      "Timer Expired";
  }
}, 1000);

// media queries
let mobile = window.matchMedia("(max-width: 460px)");
let tablet = window.matchMedia("(max-width: 880px)");
let desktop = window.matchMedia("(max-width: 1200px)");

const checkTablet = (tablet) => {
  if (tablet.matches) {
    countDown.style.cssText =
      "display: flex; flex-direction: column; justify-content: center; align-items: center; height: 10rem; width: 100%; background: #2DC2D7";
    timeBoxWrapper[0].style.cssText = "display: flex; flex-direction: row;";
  } else {
    countDown.style.cssText =
      "display: flex; flex-direction: row; justify-content: center; align-items: center; height: 10rem; width: 100%; background: #2DC2D7";
    timeBoxWrapper[0].style.cssText =
      "display: flex; flex-direction: row; margin-left: 2rem";
  }
};

const checkMobile = (mobile) => {
  if (mobile.matches) {
    countDownMessage[0].style.cssText =
      "color: white; font-family: int circular 2 book web, helvetica neue, Helvetica, Arial, sans-serif; font-size: 16px; margin: 0; ";
    for (let i = 0; i < timeBox.length; i++) {
      timeBox[i].style.cssText =
        "width: 3rem; height: 3rem; display: flex; flex-direction: column; justify-content: center; background: white; border-radius: 5px; margin: .5rem; font-family: int circular 2 book web, helvetica neue, Helvetica, Arial, sans-serif;";
      timeMeasure[i].style.cssText = "text-align: center;";
      timeName[i].style.cssText = "text-align: center; font-size: .8rem;";
      timeP[i].style.cssText = "color: #2DC2D7; margin: 0; font-size: 1rem";
    }
  } else {
    countDownMessage[0].style.cssText = "color: white; font-family: int circular 2 book web, helvetica neue, Helvetica, Arial, sans-serif; font-size: 28px; margin: 0";
    for (let i = 0; i < timeBox.length; i++) {
      timeBox[i].style.cssText = "width: 5rem; height: 5rem; display: flex; flex-direction: column; justify-content: center; background: white; border-radius: 5px; margin: .5rem; font-family: int circular 2 book web, helvetica neue, Helvetica, Arial, sans-serif;";
      timeMeasure[i].style.cssText = "text-align: center;";
      timeName[i].style.cssText = "text-align: center;";
      timeP[i].style.cssText = "color: #2DC2D7; margin: 0; font-size: 2rem";
    }
  }
};

checkTablet(tablet);
checkMobile(mobile);
tablet.addListener(checkTablet);
mobile.addListener(checkMobile);

// Your code goes here
/*
 * [x] `mouseover`
 * [ ] `keydown`
 * [ ] `wheel`
 * [ ] `drag / drop`
 * [ ] `load`
 * [ ] `focus`
 * [ ] `resize`
 * [ ] `scroll`
 * [ ] `select`
 * [ ] `dblclick`
 */

// number 1
// ****** Enlarges the fun-bus image when mouse hovers over it. ********

// Initializes funbus letiable via class and watches via browser countUntil
// user hovers mouse. | After event happens the image is targeted via class
// and the style.transitionProperty property is used with param's of
// wclassth and height which have been declared insclasse mix-in.less file.
// I put the script tag at the bottom of the html page to make sure the
// function was at least undefined instead of null.

const sizeChange = document
  .getElementByclass("fun-bus")
  .addEventListener("mouseover", () => {
    document.getElementByclass("fun-bus").style.transitionProperty =
      "wclassth,height";
  });

// number 2
// ****** When user attempts to copy and paste paragraphs  *********
// ****** the users selected text will instead be replaced *********
// ******            with PLAIGARISM IS WRONG!             *********

// copyright letiable is declared and assigned all paragraphs in the form of a
// nodelist. Since its a nodelist, I used the forEach method to add event listeners
// to each paragraph element. I watched via the "copy" property to see if the user
// would copy or paste any text. Then alerted them that plaigarism is wrong lol

function copyFunction(event) {
  event.preventDefault();
  alert("Hey PLAIGARISM IS WRONG!");
}
const copyright = document.querySelectorAll("p");
copyright.forEach((element) => {
  element.addEventListener("copy", copyFunction);
});

// number 3
// **** make the map picture rotate 180deg when you double click on it ***
// target adventure class and add listener with dblclick event and then target
// adventure class again and change its style.transform to rotate 180 deg

document.getElementByclass("adventure").addEventListener("mousedown", () => {
  document.getElementByclass("adventure").style.transform = "rotate(180deg)";
});

// number 4
// Comes back up
document.getElementByclass("adventure").addEventListener("mouseup", () => {
  document.getElementByclass("adventure").style.transform = "rotate(180deg)";
});

// number 5
// ************** make nav background dark mode on scroll ************

document
  .getElementByclass("text-content")
  .addEventListener("mouseenter", () => {
    document.getElementByclass("text-content").style.backgroundColor = "red";
    document.getElementByclass("bodysection").style.backgroundColor =
      "darkgrey";
  });

// number 6
// ****************  make background pink upon leaving ***********

document
  .getElementByclass("text-content")
  .addEventListener("mouseleave", () => {
    document.getElementByclass("text-content").style.backgroundColor = "black";
    document.getElementByclass("bodysection").style.backgroundColor = "pink";
  });

// number 7
// *************** change nav bar header area to rebecca purple *********

document.getElementByclass("headerstuff").addEventListener("mouseleave", () => {
  document.getElementByclass("headerstuff").style.backgroundColor =
    "rebeccapurple";
});

// number 8

document.getElementByclass("one").addEventListener("mouseover", () => {
  document.getElementByclass("one").style.transform = "scale(3.3)";
});
// number 9

document.getElementByclass("two").addEventListener("mouseover", () => {
  event.stopPropagation();
  document.getElementByclass("two").style.transform = "scale(2.2)";
});
// number 10

document.getElementByclass("three").addEventListener("mouseover", () => {
  document.getElementByclass("three").style.transform = "scale(1.1)";
});
