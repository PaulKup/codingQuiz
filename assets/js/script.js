var pageContentEl = document.querySelector("#page-content");
var timer = 75;
var questionAnswerArr = [
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

// question argument (num) to know which question to access in array
var displayQuestion = function(question) {
    var questionEl = document.createElement("div");
    var choiceListEl = document.createElement("ul");
    questionEl.innerText = questionAnswerArr[0].q;
    questionEl.className = "question";
    pageContentEl.appendChild(questionEl);
    for (var i = 0; i < questionAnswerArr[question].c.length; i++) {
        var choicesEl = document.createElement("li");
        var choiceBtn = document.createElement("button");
        choiceBtn.textContent = questionAnswerArr[question]["c"][i];
        choiceBtn.value = questionAnswerArr[question]["c"][i];
        console.dir(choiceBtn);
        choicesEl.appendChild(choiceBtn);
        choiceListEl.appendChild(choicesEl);
    }
    pageContentEl.appendChild(choiceListEl);
}
displayQuestion(0);