
// define size of the board as variables. 
let gridWidth = 4;
let gridHeight = 8;

//important variables - the user's answer (userAnswer) and the game over counter
let userAnswer = [];
let winCount = 0;
let totalScore = Number(localStorage.getItem("totalScore")) || 0;
let outputScore = totalScore;

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

// Build the scoreboard
let totalText = "<p id=\"lineHead\">You have won " + outputScore + " times!</p>";
document.getElementById("scoreboard").innerHTML = totalText; 




// Build the user input buttons
function buildInput() {
    for (let b = 0; b < gridWidth; b++) { // Loop through each column, max set by gridWidth var
        let button = document.createElement("span"); // Create a <span> for each button
        button.classList.add("token", "userInput"); // Add some style classes for CSS
        button.setAttribute("id","input" + b); // Give the buttons a unique ID
        document.getElementById("game").appendChild(button); // Stick the <span>'s created into the HTML
        button.onclick = function () { // If someone clicks one of the buttons just created...
            console.log("Button clicked: " + b) // Spit out which button they clicked to console for debugging
            let btnPress = new Audio('beep.mp3');
            btnPress.play();
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
    if (userAnswer.length < 4) { //if the user clicks more than 4 times i am ignoring the input.
        console.log("User Guess is button " + userGuess); //this is just telling me what button they pressed
        userAnswer.push(userGuess); //pushing the guess to an array for comparison later
    console.log("userAnswer now has " + userAnswer.length + " values and is an array of " + userAnswer); //just loggin it so i can keep track if the array breaks
    }
}

//built a button that checks the input so far (userAnswer)
function checkRow(userAnswer2) {
    if (currRow < (gridHeight - 1)) { //if the row we are on is less than the total height
    for (let i = 0; i < answer.length; i++) { //for each column
        if (answer[i] === userAnswer2[i]){ //does  value (i) in the answer equal the (i) of the user's input
            console.log("position " + i + " is correct!");
            document.getElementById("ref " + currRow + "/" + i).classList.add("right"); //add the class right so it can do a cool animation
            winCount++; //add a point to winCount, which ill use later on to determine if they win
            } else if (answer.includes(userAnswer2[i])) { //if its in the answer but not exactly right...
                console.log("position " + i + " is a right number, but is in the wrong spot...")
                document.getElementById("ref " + currRow + "/" + i).classList.add("close"); //add dashes to show its close
            } else {
                console.log("position " + i + ' is the wrong answer, bucko!')
                document.getElementById("ref " + currRow + "/" + i).classList.add("wrong"); //fade it out using class wrong so they know its wrong

        }
    }
        if (winCount == 4) {//so if they have 4 exact answers, then wincount = 4 and the "you won" stuff runs
            console.log("You WON!!");
            let currentScore = currRow + 1; //defines score based on rows
            let winMsg = "<h2 id=\"beeHead\">You have <strong>BEE</strong>n successful!!</h2><img id=bee src=bee.gif>"; //stickin a bunch of html in a variable
            winMsg += "<p id=\"lineHead\">It took " + currentScore + " lines</p>";
            document.getElementById("game").innerHTML = winMsg; // Output the win screen by overriding the whole board with whatevers in winMsg
            totalScore = (totalScore + 1);
            localStorage.setItem("totalScore", totalScore);
            for (let k = 0; k < 4; k++) { 
                let winToken = document.createElement("span");
                winToken.classList.add("token", "token" + userAnswer[k], "right");
                document.getElementById("game").appendChild(winToken);
            }
            //clear the check button - got the below line from stackoverflow
            document.querySelectorAll(".check").forEach(el => el.remove());
            let audio = new Audio('beewin.mp3'); //set audio as this mp3 file
            audio.play(); //play the mp3 file
        }
    currRow += 1; //adds 1 value to currRow if button is clicked
    currCol = 0; // resets currCol to zero
    winCount = 0; //resets winCount to zero, assuming they didnt win as per above
    console.log("the current row is " + currRow); 
    console.log("userAnswer2 is before clear " + userAnswer2);
    userAnswer = [];
    // userAnswer2.splice(0,4); //had to splice all this - Vishal helped me get row 90 working, global scope didnt get updated.
    console.log("userAnswer2 after clear is " + userAnswer2);
} else {
    console.log("YOU LOST!!")
    let loseMsg = "<h2 id=\"beeHead\"><strong>YOU FAIL!</strong></h2><img id=bee src=sad.gif><br />"; //all the same as the you won state.
    document.getElementById("game").innerHTML = loseMsg; // Output the win screen
    for (let k = 0; k < 4; k++) { 
        let loseToken = document.createElement("span");
        loseToken.classList.add("token", "token" + answer[k], "right");
        document.getElementById("game").appendChild(loseToken);
    }
    //clear the check button
        document.querySelectorAll(".check").forEach(el => el.remove());
        let audio = new Audio('fail.mp3');
        audio.play();
    
}
let rowSound = new Audio('row.mp3');
rowSound.play();
}

//running the functions here.
buildBoard();
buildInput();
