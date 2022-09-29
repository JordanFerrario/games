let width; // Width of canvas
let height; // Height of canvas
let tileSize; // Dimension of a fundamental unit on the screen
let canvas; // Ref to HTML 'canvas' element
let ctx; // Abbreviation for the context of the 'canvas' which specifies the 2D coordinate system
let food; // The item itself

// Initialization of the game objects
function Init() {

    tileSize = 20;

// Dynamically controlling the size of the canvas
width = tileSize * Math.floor(window.innerWidth / tileSize);
height = tileSize * Math.floor(window.innerHeight / tileSize);

canvas = document.getElementById("game-area");
canvas.width = width;
canvas.height = height;
ctx = canvas.getContext("2d");

food = new Food(spawnLocation(), "red");

}

// Determining a random spawn location on the grid
function spawnLocation() {

    // Breaking the entire canvas into a grid of tiles
    let rows = width / tileSize;
    let cols = height / tileSize;

    let xPos, yPos;
    xPos = Math.floor(Math.random() * rows) * tileSize;
    yPos = Math.floor(Math.random() * cols) * tileSize;

    return { x: xPos, y: yPos };

}

// Treating the food as an object
class Food {

    // Initialization of object properties
    constructor(pos, color) {

        this.x = pos.x;
        this.y = pos.y;
        this.color = color;
    }

    // Drawing the food on the canvas
    draw() {

        ctx.beginPath();
        ctx.rect(this.x, this.y, tileSize, tileSize);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.closePath();
    }
}

