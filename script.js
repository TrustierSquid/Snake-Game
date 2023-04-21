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















// SNAKE  MOVEMENT
window.addEventListener('keypress', (e) => {
    
    let key = e.key;

    // PLAYER SPEED
    let pos =  30;
    
    switch (key) {
        // going left
        case "a":
            player.style.left =  parseInt(player.style.left) - pos + 'px';
            
            break;      

        // going right
        case "d":
            player.style.left =  parseInt(player.style.left) + pos + 'px';
            

            break;
            
            // going up
        case "w":
            player.style.top = parseInt(player.style.top) - pos + 'px';
            
            break;

        // going down
        case "s":
            player.style.top = parseInt(player.style.top) + pos + 'px';
            

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
            
        }

        collisions()
    }    
    
    setInterval(()=> {

        // spawning Pebbles
        creatingPebbles()

    }, 2000)
}

// pebbleSpawning()


// CHOOSING SNAKE COLOR

function colorSelection() {
    const colorChoices = document.querySelectorAll('[data-color-button]');

    window.addEventListener('click', (button)=> {
        switch (button.target) {
            case colorChoices[0]:
                player.style.backgroundColor = "red";
                break;

            case colorChoices[1]:
                player.style.backgroundColor = "blue";
                break;

            case colorChoices[2]:
                player.style.backgroundColor = "green";
                break;

            case colorChoices[3]:
                player.style.backgroundColor = "black";
                break;

            case colorChoices[4]:
                player.style.backgroundColor = "purple";
                break;

            case colorChoices[5]:
                player.style.backgroundColor = "salmon";
                break;
            default:
                return
        }
            
        console.log("Changed color")
    
    })

    // TURNS THE SNAKE INTO WHATEVER COLOR THE USER  CHOOSES 

}

colorSelection()



console.log(player)