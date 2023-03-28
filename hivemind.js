// define size of the board as variables. 
let gridWidth = 4;
let gridHeight = 8;

//important variables - the user's answer (userAnswer) and the game over counter
let userAnswer = [];
let gameOver = 0;

const answer = Array.from({ length: 4 }, () => Math.floor(Math.random() * 4)); // Fill the 'answer' array with 4 random numbers between 0 and 4
console.log("The answer is " + answer);

// Build the game board
function buildBoard() {
    for (let h = 0; h < gridHeight; h++) { // Loop through each row, max set by gridHeight var
        for (let w = 0; w < gridWidth; w++) { // Loop through each column, max set by gridWidth var
            let token = document.createElement("span"); // Create a <span> for each token
            token.classList.add("token", h + "/" + w); // Add a class for the CSS to style
            document.getElementById("game").appendChild(token); // Stick the <span>'s created into the HTML
        }
    }
}

// Build the user input buttons
function buildInput() {
    for (let b = 0; b < gridWidth; b++) { // Loop through each column, max set by gridWidth var
        let button = document.createElement("span"); // Create a <span> for each button
        button.classList.add("token", "userInput"); // Add some style classes for CSS
        button.setAttribute("id","input" + b); // Give the buttons a unique ID
        document.getElementById("game").appendChild(button); // Stick the <span>'s created into the HTML
        button.onclick = function () { // If someone clicks one of the buttons just created...
            console.log("Button clicked: " + b) // Spit out which button they clicked to console for debugging
            gameUpdate(b); // Pass the button they clicked to the gameupdate() function
        };
    }
}

function gameUpdate(userGuess) {
    console.log("User Guess is button " + userGuess);
    let cursor = 0;
    let correct = 0;
    if (userAnswer.length < 4) {
    userAnswer.push(userGuess);
    console.log("userAnswer now has " + userAnswer.length + " values and is an array of " + userAnswer);
    // } else if (userAnswer.length == 4) {
    //     checkRow(userAnswer);
    }
}

function checkRow(userAnswer) {
    for (let i = 0; i < answer.length; i++) { 
        if (answer[i] === userAnswer[i]){
            console.log("position " + i + " is correct!")
            } else if (answer.includes(userAnswer[0])) {
                console.log("position " + i + " is a right number, but is in the wrong spot...")
            } else {
                console.log("position " + i + ' is the wrong answer, bucko!')
        }
}
}



// function checkRow(userAnswer) {
//     if (answer[0] === userAnswer[0]){
//         console.log("position 1 is correct!")
//     } else if (answer.includes(userAnswer[0])) {
//         console.log("right number, wrong spot...")
//     } else {
//         console.log('wrong answer, bucko!')
//     }
//     if (answer[1] === userAnswer[1]){
//         console.log("position 2 is correct!")
//     } else if (answer.includes(userAnswer[1])) {
//         console.log("right number, wrong spot...")
//     } else {
//         console.log('wrong answer, bucko!')
//     }
//     if (answer[2] === userAnswer[2]){
//         console.log("position 3 is correct!")
//     } else if (answer.includes(userAnswer[2])) {
//         console.log("right number, wrong spot...")
//     } else {
//         console.log('wrong answer, bucko!')
//     }
//     if (answer[3] === userAnswer[3]){
//         console.log("position 4 is correct!")
//     } else if (answer.includes(userAnswer[3])) {
//         console.log("right number, wrong spot...")
//     } else {
//         console.log('wrong answer, bucko!')
//     }

// }

// answer.indexOf(userAnswer[0])

// user could choose their number length

// function checkAnswer() {
//     for (let c = 0; c < gridWidth; c++) { 
//         if (answer[userGuess] == userGuess) {
//             console.log("Col" + c + " - Button " + userGuess + " is Correct!");
//             correct += 1;
//         } else if (answer.includes(userGuess)) {
//             console.log("Col" + c + " - Button " + userGuess + " is somewhere in the answer.");
//         } else {
//             console.log("Col" + c + " - Button " + userGuess + " is not in the answer.");
//         }
//     }
// }




buildBoard();
buildInput();