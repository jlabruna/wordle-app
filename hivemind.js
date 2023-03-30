
// define size of the board as variables. 
let gridWidth = 4;
let gridHeight = 8;

//important variables - the user's answer (userAnswer) and the game over counter
let userAnswer = [];
let winCount = 0;

//current row and col. will prob need to move this to a function
let currRow = 0;
let currCol = 0;

const answer = Array.from({ length: 4 }, () => Math.floor(Math.random() * 4)); // Fill the 'answer' array with 4 random numbers between 0 and 4
console.log("The answer is " + answer);

// Build the game board
function buildBoard() {
    for (let h = 0; h < gridHeight; h++) { // Loop through each row, max set by gridHeight var
        for (let w = 0; w < gridWidth; w++) { // Loop through each column, max set by gridWidth var
            let token = document.createElement("span"); // Create a <span> for each token
            token.classList.add("token"); // Add a class for the CSS to style
            token.setAttribute("id", "ref "+ h + "/" + w); // Add a reference ID for colouring
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
            //colour b in token 0/0
            if (currCol < 4) {
            document.getElementById("ref " + currRow + "/" + currCol).classList.add("token" + b);
                currCol += 1;
            }
            console.log("Current column is " + currCol);
            gameUpdate(b); // Pass the button they clicked to the gameupdate() function
        };
    }
}
//all this does now is push the guess to the array userAnswer really
function gameUpdate(userGuess) {
    if (userAnswer.length < 4) { //if the user clicks more than 4 times i am ignoring the input for now. will do a message or something later
        console.log("User Guess is button " + userGuess); //this is just telling me what button they pressed
        userAnswer.push(userGuess);
    console.log("userAnswer now has " + userAnswer.length + " values and is an array of " + userAnswer);
    }
}

//built a button that checks the input so far (userAnswer)
function checkRow(userAnswer2) {
    if (currRow < (gridHeight - 1)) {
    for (let i = 0; i < answer.length; i++) { //this was much better than repeating the loop 4 times as per below! :P
        if (answer[i] === userAnswer2[i]){
            console.log("position " + i + " is correct!");
            document.getElementById("ref " + currRow + "/" + i).classList.add("right");
            winCount++;
            //add a cool
            } else if (answer.includes(userAnswer2[i])) {
                console.log("position " + i + " is a right number, but is in the wrong spot...")
                document.getElementById("ref " + currRow + "/" + i).classList.add("close");
            } else {
                //next ill use these to update the border colours of the tokens, rather than console log
                console.log("position " + i + ' is the wrong answer, bucko!')
                document.getElementById("ref " + currRow + "/" + i).classList.add("wrong");

        }
    }
        if (winCount == 4) {
            console.log("You WON!!");
            let winMsg = "<h2 id=\"beeHead\">You have <strong>BEE</strong>n successful!!</h2><img id=bee src=bee.gif>";
            document.getElementById("game").innerHTML = winMsg; // Output the win screen
            //clear the check button - got the below line from stackoverflow
            document.querySelectorAll(".check").forEach(el => el.remove());
        }
    
    currRow += 1;
    currCol = 0;
    winCount = 0;
    console.log("the current row is " + currRow); 
    console.log("userAnswer2 is before clear " + userAnswer2);
    //its not clearing 
    userAnswer = [];
    // userAnswer2.splice(0,4); //had to splice all this - why doesnt userAnswer2 = [] work? function and variable same name, global scope didnt get updated.
    console.log("userAnswer2 after clear is " + userAnswer2);
} else {
    console.log("YOU LOST!!")
    let loseMsg = "<h2>YOU LOST</h2><p>YOU DISHONOUR FAMILY</p>";
    document.getElementById("game").innerHTML = loseMsg; // Output the win screen
    //clear the check button
}
}

//running the functions here.
buildBoard();
buildInput();