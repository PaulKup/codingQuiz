var timeVal = 75;
var questionIndex = 0;
var timerEl = document.querySelector(".timer");
var welcomePageEl = document.getElementById("welcome-page");
var questionsPageEl = document.getElementById("questions-page");
var resultsPageEl = document.getElementById("results-page");
var highscoresPageEl = document.getElementById("highscores-page");
var highscoresEl = document.getElementById("highscores");
var questionEl = document.getElementById("question");
var startBtnEl = document.getElementById("startBtn");
var submitBtnEl = document.getElementById("submit");
var startOverBtnEl = document.getElementById("start-over");
var timerValue;
var questionAnswerArr = [
    {
        "q": "Arrays in JavaScript are 1 indexed",
        "a": "false",
        "c": ["true", "false"]
    },
    {
        "q": "In order to perform an action when a user clicks a submit button or presses the enter key what event listener should be used?",
        "a": "submit",
        "c": ["click", "submit", "change", "dragover"]
    },
    {
        "q": "A variable declared and defined within a function has",
        "a": "local scope",
        "c": ["local scope", "global scope"]
    },
    {
        "q": "What does i++ equate to",
        "a": "i = i + 1",
        "c": ["i = 0", "i = i + 1", "i = i + 2", "i = i + i"]
    },
    {
        "q": "When saving to local Storage which data type(s) are accepted",
        "a": "strings",
        "c": ["objects, numbers", "strings, numbers", "strings, objects, numbers", "strings"]
    },
    {
        "q": "A boolean can have a value of",
        "a": "a and b",
        "c": ["true", "false", "maybe", "a and b"]
    }
]

var startQuiz = function () {
    welcomePageEl.setAttribute("class", "hide");
    questionsPageEl.removeAttribute("class");
    timerValue = setInterval(function() {
        if (timeVal >= 1) {
            timerEl.textContent = "Time: " + timeVal;
            timeVal--;
        } else if (timeVal == 0) {
            clearInterval(timerValue);
        }
    }, 1000);
    displayQuestion();
}

var displayQuestion = function () {
    var currentQuestion = questionAnswerArr[questionIndex];
    questionEl.textContent = currentQuestion.q;
    var answersEl = document.getElementById("answers");
    answersEl.innerHTML = "";
    
    currentQuestion.c.forEach(function(choice, i) {
        var answer = document.createElement("button");
        answer.textContent = choice;
        answer.setAttribute("value", choice);
        answer.setAttribute("id", "answer" + i);
        answer.onclick = answerSelect;
        answersEl.appendChild(answer);
    })
};


// evaluate input from user to determine an answer was clicked and if its the correct answer
var answerSelect = function (event) {
    if (event.target.innerText !== questionAnswerArr[questionIndex].a) {
        if (timeVal < 10) {
            timeVal = 0;
        } else {
            timeVal = timeVal - 10;
        }
    }
    questionIndex++;
    if (questionIndex === questionAnswerArr.length) {
        clearInterval(timerValue);
        endQuiz();
    } else {
        displayQuestion();
    }

};

var endQuiz = function () {

    questionsPageEl.setAttribute("class", "hide");
    resultsPageEl.removeAttribute("class");

    var scoreEl = document.getElementById("score");
    scoreEl.textContent = timeVal;
}

var showHighScores = function () {
    var initialsEl = document.getElementById("initials");
    var scores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    var highscore = {
        score: timeVal,
        initials: initialsEl.value.trim()
    }
    scores.push(highscore);
    window.localStorage.setItem("highscores", JSON.stringify(scores));
    resultsPageEl.setAttribute("class", "hide");
    highscoresPageEl.removeAttribute("class");

    scores = JSON.parse(window.localStorage.getItem("highscores"));
    scores.forEach(function(score, i) {
        var scoreItemEl = document.createElement("li");
        scoreItemEl.textContent = scores[i].initials + ': ' + scores[i].score;
        highscoresEl.appendChild(scoreItemEl);
    })

}

var resetQuiz = function () {
    timeVal = 75;
    questionIndex = 0;
    highscoresPageEl.setAttribute("class", "hide");
    welcomePageEl.removeAttribute("class");

}
startBtnEl.addEventListener("click", startQuiz);
submitBtnEl.addEventListener("click", showHighScores);
startOverBtnEl.addEventListener("click", resetQuiz);

