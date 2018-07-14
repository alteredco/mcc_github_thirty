// var that tracks user position in the quiz
var pos = 0, quiz, quiz_status, question, choice, choices, chcA, chcB, correct = 0;

var questions = [
  ["Are you travelling with children?","Yes","No","Yes"],
  ["Are you travelling with pets?","Yes","No","Yes"],
  ["Are you travelling as a couple?", "Yes", "No", "Yes"],
  ["Do you crave city-life or nature?", "City", "Country", "Yes"],
  ["Do you want to have lots of activities or relaxation?", "Activities", "Relaxation", "Activities"],
  ["Are you more interested in sports or food?", "Sports","Food", "Sports" ]
];

// function to fetch element
function _(x) {
  return document.getElementById(x);
};

function renderQuestion() {
 quiz= ("quiz");

  _("quiz_status").innerHTML = "Questions " +(pos+1) + " of " + questions.length;

  question = questions[pos][0];
  chA = questions[pos][1];
  chB = questions[pos][2];


  _("quiz").innerHTML = "<h3>" + question +"</h3>";
  _("btn1").innerHTML += chA;
  _("btn2").innerHTML += chB;
};

document.onload = renderQuestion();
