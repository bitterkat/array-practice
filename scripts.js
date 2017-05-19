// alert("Let's get to work! ")
// TODO: Build an array of strings that could be answers to magic 8 ball type questions.
var answers = [
  "I don't know.",
  "Perhaps not.",
  "Indeedily!",
  "Try again."
];

function windowReady () {
  var subhead = document.getElementById("subhead");
  var container = document.getElementById("fortune-container");
  console.log(subhead);
  console.log(container);
}

window.onload = windowReady;

function shake() {
  // get the image
  // could also do this by getting all images on the page or by class name
  var image = document.getElementById("eightball");
  // check value of className
  // set it to opposite
  var currentClass = image.className;
  if(currentClass == "left") {
    image.className = "right";
  } else {
    image.className = "left";
  }
}

function handleClick() {
  console.log(event.target);
}

function noFormClasses() {
  // Get all forms on page, set their classes to be empty
  var forms = document.getElementsByTagName("form");
  for (var i = 0; i < forms.length; i++) {
    forms[i].className = "";
  }
}

/* TODO: Write a form handler function that will:
  1. capture the question asked in the form
  2. randomly select an element from the array of answers
  3. console log something conversational to user, like "Oh, you want to know [question]? Well, I think... [answer]"
*/

function answerQuestion() {
  event.preventDefault();
  noFormClasses();

  var form = document.getElementById("ask");
  form.className = "purple";

  var question = document.magic8.question.value;
  var rando = Math.floor(Math.random() * answers.length);
  var answer = answers[rando];

  var container = document.getElementById("fortune-container");
  container.innerHTML = "<p>" + question +  " you ask? Well, I think " + answer + "</p>";
}

function addAnswer() {
  event.preventDefault();
  noFormClasses();

  var form = document.getElementById("addAnswer");
  form.className = "orange";

  var answerToAdd = document.addForm.answerToAdd.value;
  answers.push(answerToAdd);
  console.log("Added " + answerToAdd + " to answers.");
}
