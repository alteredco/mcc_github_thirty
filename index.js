// var that tracks user position in the quiz
var pos = 0, quiz, quiz_status, question, choice, choices, chA, chB, correct = 0;

var questions = [
  ["Are you travelling with children?","Yes","No","Yes"],
  ["Are you travelling with pets?","Yes","No","Yes"],
  ["Are you travelling as a couple?", "Yes", "No", "Yes"],
  ["Do you crave city-life or nature?", "City", "Country", "Yes"],
  ["Do you want to have lots of activities or relaxation?", "Activities", "Relaxation", "Activities"],
  ["Are you more interested in sports or food?", "Sports","Food", "Sports" ]
];

var totQuestions = questions.length;

// function to fetch element
function _(x) {
  return document.getElementById(x);
};

// function to render question on the index.html page
function renderQuestion() {
 quiz= ("quiz");

 if(pos <= (totQuestions-1)){
  _("quiz_status").innerHTML = "Questions " +(pos+1) + " of " + totQuestions;
} else {
  _("quiz_status").innerHTML = "Questions " +(pos) + " of " + totQuestions;
}

  question = questions[pos][0];
  chA = questions[pos][1];
  chB = questions[pos][2];


  _("quiz").innerHTML = "<h3>" + question +"</h3>";
  _("quiz").innerHTML += "<input type='button' class='btn' name ='choices' onClick='checkAnswer()'  value=' "+chA+"'><br>";
  _("quiz").innerHTML += "<input type='button' class='btn' onClick='checkAnswer()' name ='choices' value=' "+chB+"'><br>";
};

function checkAnswer() {
    for(var i = 0; i<questions[pos].length; i++) {
      if(choice === questions[pos][4]) {
        correct++;
        console.log(correct);
      }
    }
    pos++;
    renderQuestion();
};


document.onload = renderQuestion();
