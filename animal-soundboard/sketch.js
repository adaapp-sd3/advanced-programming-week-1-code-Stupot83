var dogButton = new Button('Dog', 10, 10);
var catButton = new Button('Cat', 120, 10);

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);

    dogButton.draw();
    catButton.draw();
}

function mousePressed() {
    if (dogButton.containsMouse()) {
        alert("Woof!");
    }
    if (catButton.containsMouse()) {
        alert("Meow!");
    }
}