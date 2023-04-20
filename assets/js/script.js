
let buttons = document.getElementsByTagName("button");
for (let button of buttons) {
    button.addEventListener("click", function() {
        if (this.getAttribute("data-type") === "submit") {
            checkAnswer();
        } else {
            let gameType = this.getAttribute("data-type");
            runGame(gameType);
        }
    }); 
}

document.getElementById("answer-box").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkAnswer();
    }
});
;
/** This function makes it possible to press any of the four buttons to start the game */
function startGame(operation) {
    currentOperation = operation;
    generateQuestion();
}

function runGame(operation) {
    startGame(operation);
    document.getElementById("answer-box").value = "";
    document.getElementById("answer-box").focus();
}
/** Generates a question with two random numbers */
function generateQuestion() {
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;

    if (currentOperation === "addition") {
        displayAdditionQuestion(num1, num2);
    } else if (currentOperation === "multiplication") {
        displayMultiplicationQuestion(num1, num2);
    } else if (currentOperation === "subtract") {
        displaySubtractQuestion(num1, num2);
    } else if (currentOperation === "divide") {
        displayDivisionQuestion(num1, num2);
    } else {
        alert(`Unknown game type ${currentOperation}`);
        throw `Unknown game type ${currentOperation}, aborting!`;
    }
}



