//Detecting button press
function buttonclick() {

  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}
for (var i = 0; i < 7; i++) { // no. of buttons = 7
  document.querySelectorAll("button")[i].addEventListener("click", buttonclick); // applying  to all buttons

}
//Detecting keyboard pressed
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "a":
      var tom1 = new Audio("sounds/tom-1.mp3");
      //here we call built in constructor named Audio creates its object tom1 and use method playon it
      tom1.play();
      break;
    case "s":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "d":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "f":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick.mp3");
      kick.play();
      break;
    default:
      console.log(key);

  }
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
     //function to create delay of 0.1 seconds and then perform another function that removes "pressed" class
    activeButton.classList.remove("pressed");
  },100);   //100milliseconds = 0.1 sec
}






//
//
