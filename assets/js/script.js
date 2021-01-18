var pageContentEl = document.querySelector("#page-content");
var timeVal = 75;
var questionIndex = 0;
var timerEl = document.querySelector(".timer");
var questionAnswerArr = [
    {
        "title": "Welcome to a JavaScript Quiz",
        "message": "This is a timed JavaScript quiz.  You will have 75 seconds to answer 6 questions.  Good Luck!",
        "begin" : "Begin"
    },
    {
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
        clearInterval(timerValue);
    }
}, 1000);

// question argument (num) to know which question to access in array
var displayQuestion = function () {
    pageContentEl.innerHTML = "";
    if (questionIndex == 0) {
        var welcomeEl = document.createElement("h1");
        var descriptionEl = document.createElement("p");
        var startBtn = document.createElement("button");
        welcomeEl.textContent = questionAnswerArr[0].title;
        descriptionEl.textContent = questionAnswerArr[0].message;
        startBtn.textContent = questionAnswerArr[0].begin;
    } else if (timeVal > 0 && questionIndex < questionAnswerArr.length) {
    var questionEl = document.createElement("div");
    var choiceListEl = document.createElement("ul");
    questionEl.innerText = questionAnswerArr[questionIndex].q;
    questionEl.className = "question";
    pageContentEl.appendChild(questionEl);
    for (var i = 0; i < questionAnswerArr[questionIndex].c.length; i++) {
        var choicesEl = document.createElement("li");
        var choiceBtn = document.createElement("button");
        choiceBtn.id = i;
        choiceBtn.className = "answer-button"
        choiceBtn.textContent = questionAnswerArr[questionIndex]["c"][i];
        choiceBtn.value = questionAnswerArr[questionIndex]["c"][i];
        choicesEl.appendChild(choiceBtn);
        choiceListEl.appendChild(choicesEl);
    }
    pageContentEl.appendChild(choiceListEl);


}
// evaluate input from user to determine an answer was clicked and if its the correct answer
var inputEval = function (event) {
    if (event.target.className === "answer-button") {
        if (event.target.value === questionAnswerArr[questionIndex]["a"]) {
            return true;
        }
    }

}


var welcomeScreen = function () {
    
    welcomeEl.textContent = "Coding Quiz Challenge";
    
    descriptionEl.textContent = "This is a timed JavaScript quiz.  You will have 75 seconds to answer 6 questions.  Good Luck!";
    
    startBtn.textContent = "Start Quiz";
    pageContentEl.appendChild(welcomeEl);
    pageContentEl.appendChild(descriptionEl);
    pageContentEl.appendChild(startBtn);
    startBtn.addEventListener("click", displayQuestion);
}

// welcomeScreen();

// pageContentEl.addEventListener("click", inputEval)
for (var i = 0; i < questionAnswerArr.length; i++) {
    pageContentEl.addEventListener("click", displayQuestion)
}