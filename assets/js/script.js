var pageContentEl = document.querySelector("#page-content");
var timeVal = 75;
var questionIndex = 0;
var timerEl = document.querySelector(".timer");
var questionAnswerArr = [{
        "q": "Arrays in JavaScript are 1 indexed",
        "a": "true",
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

var timerValue = setInterval(function() {
    if (timeVal > 1) {
        timerEl.textContent = "Time: " + timeVal;
        timeVal--;
    } else if (timeVal == 0) {
        return false;
    }
}, 1000);

// question argument (num) to know which question to access in array
var displayQuestion = function () {
    pageReset();
    var questionEl = document.createElement("div");
    var choiceListEl = document.createElement("ul");
    questionEl.innerText = questionAnswerArr[questionIndex].q;
    questionEl.className = "question";
    pageContentEl.appendChild(questionEl);
    for (var i = 0; i < questionAnswerArr[questionIndex].c.length; i++) {
        var choicesEl = document.createElement("li");
        var choiceBtn = document.createElement("button");
        choiceBtn.className = "answer-button"
        choiceBtn.textContent = questionAnswerArr[questionIndex]["c"][i];
        choiceBtn.value = questionAnswerArr[questionIndex]["c"][i];
        choicesEl.appendChild(choiceBtn);
        choiceListEl.appendChild(choicesEl);
    }
    pageContentEl.appendChild(choiceListEl);
    questionIndex++;

}
// evaluate input from user to determine an answer was clicked and if its the correct answer
var inputEval = function (event) {
    if (event.target.className === "answer-button") {
        if (event.target.value === questionAnswerArr[questionIndex]["a"]) {
            return true;
        }
    }

}

var pageReset = function () {
    pageContentEl.innerHTML = "";
}

var welcomeScreen = function () {
    var welcomeEl = document.createElement("h1");
    welcomeEl.textContent = "Coding Quiz Challenge";
    var descriptionEl = document.createElement("p");
    descriptionEl.textContent = "This is a timed JavaScript quiz.  You will have 75 seconds to answer 6 questions.  Good Luck!";
    var startBtn = document.createElement("button");
    startBtn.textContent = "Start Quiz";
    pageContentEl.appendChild(welcomeEl);
    pageContentEl.appendChild(descriptionEl);
    pageContentEl.appendChild(startBtn);
    startBtn.addEventListener("click", displayQuestion);
}

welcomeScreen();
