
//these variables connect our code with the 'id' on the html
//we can then manipulate the variables and it will manipulate the html
var images = document.getElementById("images"); 
var text = document.getElementById("text"); 
var buttonBox = document.getElementById('buttonBox');
var input = document.getElementById('input');
//this is the variable for the name of the character
var yername;



//this is how after we type in the character name and hit enter
//we will add the name to the variable, remove the input box and start our first scenario
input.onkeypress = function(event) {
  console.log(input.value);
  if (event.key == "Enter" || event.keyCode == 13) {
    yername =  input.value;
    input.parentNode.removeChild(input)
    advanceTo(scenario.two)
  }
};


//this changes the text and puts in your characters name
var changeText = function(words) {
  text.innerHTML = words.replace("Your", yername);
};

//this takes the image link and puts it in the proper format, sending it to the html
var changeImage = function(img) {
  images.style.backgroundImage = "url(" + img + ")";
};


//this looks at the number of options we have set and creates enough buttons 
var changeButtons = function(buttonList) {
  buttonBox.innerHTML = "";
  for (var i = 0; i < buttonList.length; i++) {
    buttonBox.innerHTML += "<button onClick="+buttonList[i][1]+">" + buttonList[i][0] + "</button>";
  };
};

//this is what moves the game along
var advanceTo = function(s) {
  changeImage(s.image)
  changeText(s.text)
  changeButtons(s.buttons)
};






//this is the object that holds each scenario, the more you add the more options there are
//scenario = {}
var scenario = {
  one: {
    text: "You are in a concrete room with a doorway.\n",
  },
  two: {
    text: "You advance through the doorway.",
    buttons: [["Turn and run", "advanceTo(scenario.three)"],["Enter The House", "advanceTo(scenario.four)"]]
  },
  three: {
    text: "A wild gang of rabid dogs are gaining on you. Against your better judgement you enter the creepy house for saftey. Your dog is whincing and may be injured.",
    buttons: [["continue", "advanceTo(scenario.four)"]]
  },
    four: {
    text: "Your dog has run, barking loudly, into the basement. You wonder what's down there. The door jammed when you slammed it behind you. You are going to need something to pry it back open",
    buttons: [["Follow your Dog Downstairs", "advanceTo(scenario.five)"],["Search the Kitchen for a knife", "advanceTo(scenario.five)"]]
  },
    five: {
    text: "TO BE CONTINUED...",

  },
  
};


//this is the code that starts the game
advanceTo(scenario.one);