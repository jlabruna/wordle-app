# Hivemind
### *A hybrid Wordle/Mastermind type game*


## Instructions to play

The object of the game is to determine the colour sequence before you run out of rows.

Head [here](https://jlabruna.github.io/wordle-app/hivemind.html "The Game") and start playing!

Press any combination of the four colours at the bottom of the grid to add your guess to the top row. click check! to see if your guess is correct.

- If a cell is the correct colour and in the correct place, it will glow and animate.
- If a cell contains a colour that is present in the code, but is in a different place, the border will animate with white and black dashes.
- If a cell contains a colour that is not present in the sequence, it will fade out.

Press **Reset!** to reset the game.




### Purpose

Apart from being a bit of fun, the purpose of this game is to serve as a first project submission. The requirements of submission are to - 

- Include separate HTML, CSS, and JS files
- Be playable as a game in the browser with multiple turns/attempts
- Have logic for winning and losing the game
- Use JS for DOM manipulation
- Be deployed online

### Overall Approach

The project initially started out as an attempt to replicate wordle, but as I started to flesh out the basics I was using a randomly generated number as a placeholder for the answer, rather than cycling through a dictionary. I then thought I could represent the numbers as colours, and thus the basic idea was born. I then ended up scrapping what I had done and restarting with this new direction in mind. I had a solid code build on Wednesday night, with error handling, out of bounds, a win and lose state, all outputting to console log. Thursday was my day to add graphical indicators and pretty it up. I had an idea to use the local browser storage to record score, social media sharing, etc, but I just ran out of time.

My aim was to achieve a working, error free game before the deadline to allow myself time for styling.

### Technologies used

Coded in *VSCode*. CSS3, HTML5, JS. 

### Unsolved Problems

None within the scope of the project. 


### Attribution

The three main pieces of code I sourced online was a line in JS to remove the Check button once the game is completed, and 2 pieces of CSS - The check/reset button was sourced from [CSS Scan](https://getcssscan.com/css-buttons-examples), and the animation for the correct tokens on the grid was cut and pasted and reverse engineered.



