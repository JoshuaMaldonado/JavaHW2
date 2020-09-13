var card = $("#quiz-area");


var questions = [
  {
    question: "How many cocoa beans does it take to make a pound of chocolate?",
    answers: ["200", "400", "1,000", "20"],
    correctAnswer: "400"
  },
  {
    question: "How many days does it take to make a single chocolate bar?",
    answers: ["2", "1", "7", "10"],
    correctAnswer: "2"
  },
  {
    question: "Which chocolate is not really considered a chocolate?",
    answers: ["Milk chocolate", "Dark chocolate", "White chocolate", "Extra Dark chocolate"],
    correctAnswer: "White chocolate"
  },
  {
    question: "What is chocolate made from?",
    answers: ["Bean", "Root", "Fruit", "Potatoe"],
    correctAnswer: "Bean"
  },
  {
    question: "Where was Milk chocolate invented?",
    answers: ["Belgium", "France", "Switzerland", "Germany"],
    correctAnswer: "Switzerland"
  },
  {
    question:
      "Where was the firts chocolate bar made'",
    answers: ["Englnad", "Spain", "Colombia", "Brazil"],
    correctAnswer: "England"
  },
  {
    question: "What is the melting point of chocolate?",
    answers: ["93F", "85F", "102F", "88F"],
    correctAnswer: "93F"
  },
  {
    question: "Where is most of the chocolte grown?",
    answers: ["Brazil", "Argentina", "Africa", "Hawaii"],
    correctAnswer: "Africa"
  }
];

var timer;

var game = {
  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend(
      "<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>"
    );

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      card.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        card.append("<input type='radio' name='question-" + i +
          "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    card.append("<button id='done'>Done</button>");
  },

  done: function() {
    var inputs = card.children("input:checked");
    for (var i = 0; i < inputs.length; i++) {
      if ($(inputs[i]).val() === questions[i].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    }
    this.result();
  },

  result: function() {
    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    card.html("<h2>All Done!</h2>");
    card.append("<h3>Correct Answers: " + this.correct + "</h3>");
    card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
  }
};


$(document).on("click", "#start", function() {
  game.start();
});

$(document).on("click", "#done", function() {
  game.done();
});
