// Jello snake
// by  Samuel hunt

let player = document.getElementById("player");
const gameBoard = document.getElementById("game-board");

window.addEventListener("load", () => {
    
    // values that will be parsed
    player.style.position = "absolute";
    player.style.left = 0;
    player.style.top = 0;
    player.style.right = 0;
    player.style.bottom = 0;

})

// animtaion for when the player goes horizonally or vertically across the board
function shapeShift() {
    player.style.width = "90px";
    player.style.height = "10px";

    // when the player going horizontally across the board
    window.addEventListener("keydown", (e) => {
        let key = e.key;
        switch (key) {
            case "s":
                player.style.width = "10px";
                player.style.height = "90px";
                break;
            case "w":
                player.style.width = "10px";
                player.style.height = "90px";
        }
    })
}

// SNAKE  MOVEMENT
window.addEventListener('keydown', (e) => {
    
    let key = e.key;
    let pos =  5;
    
    switch (key) {
        // going left
        case "a":
            player.style.left =  parseInt(player.style.left) - pos + 'px';
            // console.log("moving left")
            shapeShift();

            break;

        // going right
        case "d":
            player.style.left =  parseInt(player.style.left) + pos + 'px';
            // console.log("moving right")
            shapeShift();
            break;

        // going up
        case "w":
            player.style.top = parseInt(player.style.top) - pos + 'px';
            // console.log("moving up")
            shapeShift();

            break;

        // going down
        case "s":
            player.style.top = parseInt(player.style.top) + pos + 'px';
            // console.log("moving down")
            shapeShift();

            break;
        default:
            return
    }
    
}) 


// GAME BOARD IS 400 x 900
function pebbleSpawning(){
    
    function spawnIn(){
        let newPebble = document.createElement("div");
        newPebble.classList.add("pebble-dressing");
        
        // the size of the pebble
        newPebble.style.height = Math.ceil(Math.random() * 60)
        newPebble.style.width = newPebble.style.height;
    }
    
    // appending to gameBoard
    gameBoard.appendChild(newPebble);
    
    setInterval(()=> {
        let spawnHeight = Math.ceil(Math.random() * 400);
        let spawnWidth = Math.ceil(Math.random() * 900);
        
        spawnIn()

    }, 2000)
}