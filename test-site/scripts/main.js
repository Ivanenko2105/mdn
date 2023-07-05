var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/CSS3-logo.png") {
    myImage.setAttribute("src", "images/html5-logo.png");
  } else {
    myImage.setAttribute("src", "images/CSS3-logo.png");
  }
};

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
  var myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = "CSS is cool, " + myName;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  var storedName = localStorage.getItem("name");
  myHeading.textContent = "CSS is cool, " + storedName;
}

myButton.onclick = function () {
  setUserName();
};
