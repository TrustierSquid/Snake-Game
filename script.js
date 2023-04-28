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

pebbleSpawning()


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
                player.style.backgroundColor = "#d4af37";
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

// github copilot shit idk, sort through this

// // SNAKE GROWING
// function snakeGrowing() {
//     let snakeLength = 0;
//     let snakeSize = 1;
//     let snakeBody = [];

//     function growing() {
//         snakeLength += snakeSize;
//         snakeBody.push(snakeLength)
//         console.log(snakeLength)
//     }

//     growing()
// }

// snakeGrowing()

// // SNAKE COLLISIONS
// function snakeCollisions() {
//     let snakeHead = document.getElementById("player");
//     let snakeBody = document.querySelectorAll(".snake-body");

//     // if the snake head and the snake body collide
//     if (snakeHead.style.left === snakeBody.style.left && snakeHead.style.top === snakeBody.style.top) {
//         console.log("collided")
//     }
// }

// snakeCollisions()

// // SNAKE SPEED
// function snakeSpeed() {
//     let snakeSpeed = 0;

//     // if the snake eats a pebble, the snake will grow and the speed will increase
//     if (snakeGrowing()) {
//         snakeSpeed += 1;
//     }
// }

// snakeSpeed()

// // SNAKE SCORE
// function snakeScore() {
//     let snakeScore = 0;

//     // if the snake eats a pebble, the snake will grow and the score will increase
//     if (snakeGrowing()) {
//         snakeScore += 1;
//     }
// }

// snakeScore()

// // SNAKE GAME OVER
// function snakeGameOver() {
//     let snakeHead = document.getElementById("player");
//     let snakeBody = document.querySelectorAll(".snake-body");

//     // if the snake head and the snake body collide
//     if (snakeHead.style.left === snakeBody.style.left && snakeHead.style.top === snakeBody.style.top) {
//         console.log("collided")
//     }
// }

// snakeGameOver()

// // SNAKE GAME RESET
// function snakeGameReset() {
//     let snakeHead = document.getElementById("player");
//     let snakeBody = document.querySelectorAll(".snake-body");

//     // if the snake head and the snake body collide
//     if (snakeHead.style.left === snakeBody.style.left && snakeHead.style.top === snakeBody.style.top) {
//         console.log("collided")
//     }
// }

// snakeGameReset()

// // SNAKE GAME START
// function snakeGameStart() {
//     let snakeHead = document.getElementById("player");
//     let snakeBody = document.querySelectorAll(".snake-body");

//     // if the snake head and the snake body collide
//     if (snakeHead.style.left === snakeBody.style.left && snakeHead.style.top === snakeBody.style.top) {
//         console.log("collided")
//     }
// }

// snakeGameStart()


// // SNAKE GAME PAUSE
// function snakeGamePause() {
//     let snakeHead = document.getElementById("player");
//     let snakeBody = document.querySelectorAll(".snake-body");

//     // if the snake head and the snake body collide
//     if (snakeHead.style.left === snakeBody.style.left && snakeHead.style.top === snakeBody.style.top) {
//         console.log("collided")
//     }
// }

// snakeGamePause()

// // SNAKE GAME RESUME

// function snakeGameResume() {
//     let snakeHead = document.getElementById("player");
//     let snakeBody = document.querySelectorAll(".snake-body");

//     // if the snake head and the snake body collide
//     if (snakeHead.style.left === snakeBody.style.left && snakeHead.style.top === snakeBody.style.top) {
//         console.log("collided")
//     }
// }

// snakeGameResume()

// // SNAKE GAME RESTART

// function snakeGameRestart() {
//     let snakeHead = document.getElementById("player");
//     let snakeBody = document.querySelectorAll(".snake-body");

//     // if the snake head and the snake body collide
//     if (snakeHead.style.left === snakeBody.style.left && snakeHead.style.top === snakeBody.style.top) {
//         console.log("collided")
//     }
// }

// snakeGameRestart()

// // SNAKE GAME QUIT

// function snakeGameQuit() {
//     let snakeHead = document.getElementById("player");
//     let snakeBody = document.querySelectorAll(".snake-body");

//     // if the snake head and the snake body collide
//     if (snakeHead.style.left === snakeBody.style.left && snakeHead.style.top === snakeBody.style.top) {
//         console.log("collided")
//     }
// }

// snakeGameQuit()


