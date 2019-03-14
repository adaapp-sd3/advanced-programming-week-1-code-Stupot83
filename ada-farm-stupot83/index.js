var fields = [];
var farmer;
var activeField = null;

// This setup function is called once
// when P5 is ready to go
function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background('#78d361');
    alert('Welcome to the farm');
    var username = prompt("What's your name?");
    farmer = new Farmer(username);
    farmer.speak('Ey oh ey oh ey oh');

    fields.push(
        new Field('Carrot field', 10, 25, 75, 350, 275)
    );
    fields.push(
        new Field('Wheat field', 10, 500, 75, 350, 275)
    );
    fields.push(
        new Field('Pumpkin field', 10, 975, 75, 350, 275)
    );
    fields.push(
        new Field('Cow field', 10, 25, 400, 350, 275)
    );
    fields.push(
        new Field('Pig field', 10, 500, 400, 350, 275)
    );
    fields.push(
        new Field('Sheep field', 10, 975, 400, 350, 275)
    );
}

function keyPressed() {
    farmer.farmerKeyPressed();
}

// This draw function is called repeatedly by
// P5 and is where we can do most of our work
function draw() {
    background('#78d361');

    for (var field of fields) {
        field.draw();
    }

    farmer.update();
    farmer.draw();

    setActiveFieldFromFarmerPosition();

    if (activeField) {
        noStroke();
        fill('black');
        textSize(20);
        text(activeField.name, 25, 40);
    }
}

function setActiveFieldFromFarmerPosition() {
    activeField = null;
    farmer.setActiveField(null);
    for (var field of fields) {
        if (field.containsPoint(farmer.xPosition, farmer.yPosition)) {
            activeField = field;
            farmer.setActiveField(field);
        }
    }
}