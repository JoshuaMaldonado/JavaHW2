var timeLeft = 20;

var intervalID

var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive];

var questionNumber = 0;

var correctAnswers = 0;

var incorrectAnswers = 0;

var currentQuestion = 0;

var unansweredQuestions = 0;



var questionOne = {
    Q: "How many cocoa beans does it take to make a pound of chocolate?",
    answers: {
        A: "200",
        B: "400",
        C: "20",
        D: "1,000",
    },
    answer: "B"
}

var questionTwo = {
    Q: "How many days does it take to make a single chocolate bar?",
    answers: {
        A: "2",
        B: "1",
        C: "7",
        D: "10",
    },
    answer: "A"
}

var questionThree = {
    Q: "Where was Milk chocolate invented?",
    answers: {
        A: "Belgium",
        B: "France",
        C: "Switzerland",
        D: "Germany",
    },
    answer: "C"
}

var questionFour = {
    Q: "Where is most of the chocolte grown?",
    answers: {
        A: "Brazil",
        B: "Argentina",
        C: "Hawaii",
        D: "Africa",
    },
    answer: "D"
}

var questionFive = {
    Q: "Where was the firts chocolate bar made?",
    answers: {
        A: "England",
        B: "Spain",
        C: "Colombia",
        D: "Brazil",
    },
    answer: "A"
}



function getQuestion(questionNum) {
    $("#questionH").text(questions[questionNum].Q)
    $("#aButton").text(questions[questionNum].answers.A)
    $("#bButton").text(questions[questionNum].answers.B)
    $("#cButton").text(questions[questionNum].answers.C)
    $("#dButton").text(questions[questionNum].answers.D)

}
function transition(text) {
    clearInterval(intervalID)
    timeLeft = 20;
    currentQuestion++;

    $("#transitionText").text(text)
    $("#mainScreen").attr("hidden", true)

    if (currentQuestion < questions.length) {
        $("#transitionScreen").attr("hidden", false)
        setTimeout(function () {
            $("#mainScreen").attr("hidden", false)
            $("#transitionScreen").attr("hidden", true)
            startTimer()
            getQuestion(currentQuestion)
        }, 5000)
    }

    else {

        $("#transitionText").text("G.G.")
        $("#transitionScreen").attr("hidden", false)
        $("#correctAnswers").text(correctAnswers)
        $("#incorrectAnswers").text(incorrectAnswers)
        $("#unansweredQuestions").text(unansweredQuestions)
        $("#resultsDiv").attr("hidden", false)
        console.log("G.G.")
    }

}

function startTimer() {
    $("#timeLeftH").text(timeLeft)
    intervalID = setInterval(function () {
        timeLeft--
        $("#timeLeftH").text(timeLeft)

        if (timeLeft === 0) {
            transition("Times up!")
            unansweredQuestions++
        }
    }, 1000)


}
$("#startButton").on("click", function () {
    $("#startBtnDiv").attr("hidden", true)
    $("#mainScreen").attr("hidden", false)
    startTimer()
})
getQuestion(currentQuestion)
$(".answer-buttons").on("click", function (event) {
    
    if (event.target.value === questions[currentQuestion].answer) {
        correctAnswers++;
        transition("Noice!")
    }
    
    else {
        incorrectAnswers++;
        transition("Wrong!")
    }



    console.log(correctAnswers, incorrectAnswers);
})

