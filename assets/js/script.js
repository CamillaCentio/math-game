
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

function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("That was right, good work");
        incrementScore();
    } else {
        alert(`Sorry, that was not correct, the correct answer was: ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
    }

    runGame(currentOperation[1]);
}

function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else if (operator === "x") {
        return [operand1 * operand2, "multiplication"];
    } else if (operator === "-") {
        return [operand1 - operand2, "subtract"];
    } else if (operator === "/") {
        return [operand1 / operand2, "divide"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}, aborting!`;
    }
}

function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
}





