//array list of the quiz questions, choices and correct answer
var quizQuestions = [
    {
        question: "What are variables used for in JavaScript Programs?",
        choices: 
            ["A: Storing numbers, dates, or other values", 
            "B: Varying randomly",
            "C: Causing high-school algebra flashbacks", 
            "D: None of the above"],

        answer: "A: Storing numbers, dates, or other values"
        
    },
    {
        question: "Using _________ statement is how you test for a specific condition.",
        choices: 
            ["A: Select", 
            "B: If", 
            "C: Switch", 
            "D: For"],

        answer: "B: If"
    },
    {
        question: "In JavaScript, _________ is an object of the target language data type that encloses an object of the source language.",
        choices: 
            ["A: a wrapper", 
            "B: a link", 
            "C: a cursor", 
            "D: a form"],

        answer: "A: a wrapper"
    },
    {
        question: "The _________ method of an Array object adds and/or removes elements from an array.",
        choices: 
            ["A: Reverse", 
            "B: Shift", 
            "C: Slice", 
            "D: Splice"],

        answer: "D: Splice"
    },
    {
        question: "Which is the correct way to write a JavaScript array?",
        choices: 
            ["A; var txt = new Array(1:'tim',2:'kim',3:'jim')", 
            "B: var txt = new Array:1=('tim')2=('kim')3=('jim')", 
            "C: var txt = new Array('tim','kim','jim')", 
            "D: var txt = new Array='tim','kim','jim'"],

        answer: "C: var txt = new Array('tim','kim','jim')"
}]

//create variable for the functions of the timer and scores
var score = 0;
var currentQuestion = -1;
var timeLeft = 0;
var timer;

//start countdown timer once 'start' button is pressed
function start() {

    timeLeft = 85;
    document.getElementById("timeLeft").innerHTML = timeLeft;

    timer = setInterval(function() {
        timeLeft--;
        document.getElementById("timeLeft").innerHTML = timeLeft;
        //proceed to end the game function when timer is below 0 at any time
        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame(); 
        }
    }, 1000); //set pacing of timer to be 1000 millisecond per interval change

    next();
}

//stop the timer to end the game
function endGame() {
    clearInterval(timer);

    //create message within java for game over screen
    var quizContent = `
    <h2>Game over!</h2>
    <h3>You got ` + score +  ` /100!</h3>
    <h3>That means you got ` + score / 20 +  ` out of 5 questions correct!</h3>
    <input type="text" id="name" placeholder="Initials"> 
    <button onclick="setScore()">Set score!</button>`;

    document.getElementById("quizBody").innerHTML = quizContent;
}

//store the scores on local storage
function setScore() {
    localStorage.setItem("highscore", score);
    localStorage.setItem("highscoreName",  document.getElementById('name').value);
    getScore();
}

function getScore() {
    //create message body within java for score screen
    var quizContent = `
    <h2>` + localStorage.getItem("highscoreName") + `'s highscore is:</h2>
    <h1>` + localStorage.getItem("highscore") + `</h1><br> 
    
    <button onclick="clearScore()">Clear score!</button><button onclick="resetGame()">Play Again!</button>`;

    document.getElementById("quizBody").innerHTML = quizContent;
}
//clear score name and value in the local storage if the user selects 'clear score'
function clearScore() {
    localStorage.setItem("highscore", "");
    localStorage.setItem("highscoreName", "");

    resetGame();
}

//reset the game 
function resetGame() {
    clearInterval(timer);
    score = 0;
    currentQuestion = -1;
    timeLeft = 0;
    timer = null;

    document.getElementById("timeLeft").innerHTML = timeLeft;

//create message body within java
    var quizContent = `
    <h1>
        JavaScript Quiz!
    </h1>
    <h3>
        Click to play!   
    </h3>
    <button onclick="start()">Start!</button>`;

    document.getElementById("quizBody").innerHTML = quizContent;
}

//deducts 15 seconds from the timer if user chooses an incorrect answer
function incorrect() {
    timeLeft -= 15; 
    next();
}

//increases the score by 20 pts if the user chooses the correct answer
function correct() {
    score += 20;
    next();
}

//loops through the questions 
function next() {
    currentQuestion++;

    if (currentQuestion > quizQuestions.length - 1) {
        endGame();
        return;
    }

    var quizContent = "<h2>" + quizQuestions[currentQuestion].question + "</h2>"

    for (var buttonLoop = 0; buttonLoop < quizQuestions[currentQuestion].choices.length; buttonLoop++) {
        var buttonCode = "<button onclick=\"[ANS]\">[CHOICE]</button>"; 
        buttonCode = buttonCode.replace("[CHOICE]", quizQuestions[currentQuestion].choices[buttonLoop]);
        if (quizQuestions[currentQuestion].choices[buttonLoop] === quizQuestions[currentQuestion].answer) {
            buttonCode = buttonCode.replace("[ANS]", "correct()");
        } else {
            buttonCode = buttonCode.replace("[ANS]", "incorrect()");
        }
        quizContent += buttonCode
    }


    document.getElementById("quizBody").innerHTML = quizContent;
}
