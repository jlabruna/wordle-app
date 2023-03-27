// define size of the board as variables. Using standard wordle board size.
let gridWidth = 5;
let gridHeight = 6;


//lets build the board
function buildBoard() {
    //create board on load
    for (let h = 0; h < gridHeight; h++ ) {
        for (let w = 0; w < gridWidth; w++) {
            //creating a span <span class="box"></span>
            let box = document.createElement("span");
            box.classList.add("box");
            //this will put whateers in quotes in the box
            // X as placeholder
            box.innerText = "X";
            document.getElementById("grid").appendChild(box);
        }
    }
}
buildBoard();