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
    

    // when the player going vertically across the board
    window.addEventListener("keydown", (e) => {
        let key = e.key;
        switch (key) {
            case "s":
                
                
                break;
            case "w":
                
                break;
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
    
    function creatingPebbles(){
        let newPebble = document.createElement("div");
        newPebble.classList.add("pebble-dressing");
        
        // the size of the pebble
        let randomSize = Math.ceil(Math.random() * 20)
        newPebble.style.height = randomSize + "px";
        newPebble.style.width = randomSize + "px";
        newPebble.style.position = "absolute";

        // appending to gameBoard
        gameBoard.appendChild(newPebble);

        // pebble Positioning
        let randomPositionHeight = Math.floor(Math.random() * 400)
        let randomPositionWidth = Math.floor(Math.random() * 900)

        newPebble.style.top = parseInt(randomPositionHeight) + "px";
        newPebble.style.left = parseInt(randomPositionWidth) + "px";
        
        function collisions(){
            WTF??????????????????????????????????????
        }

        collisions()
    }    
    
    setInterval(()=> {

        // spawning Pebbles
        creatingPebbles()

    }, 2000)
}

// pebbleSpawning()