const GRID_SIZE =20;
let headX;
let headY;
let foodX;
let foodY;
let numberOfCells;
let randomCellFloor;
let randomCell





function setup(){
    createCanvas(600, 600)
    numberOfCells = width / GRID_SIZE;
    randomCell = random(numberOfCells);
    randomCellFloor = floor(randomCell);
    frameRate(3)
    headX = GRID_SIZE
    headY = GRID_SIZE
    foodX = randomCellFloor * GRID_SIZE + GRID_SIZE/2;
    foodY = randomCellFloor * GRID_SIZE + GRID_SIZE/2;

}
function draw(){
    background(150, 10, 200)
    fill(255, 200, 0)
    square (headX, headY, 20);
    fill(200, 255, 255)
    circle(foodX, foodY, 20);
    headX = headX + GRID_SIZE;


    if (headX >= 600){
        headX = 580;
    }



}
