class Crop {
    constructor(type, field, x, y) {
        this.type = type;
        this.image = loadImage('./images/' + type.toLowerCase() + '.png');
        this.x = x;
        this.y = y;
        this.birthstamp = millis() / 1000;
        this.width = 1;
        this.height = 1;
        this.healthySize = 30;
        this.draw();
    }

    getAge() {
        return millis() / 1000 - this.birthstamp;
    }

    draw() {

        if (this.getAge() < this.healthySize) {
            var width = this.width * this.getAge();
            var height = this.height * this.getAge();
        } else {
            var width = 30;
            var height = 30;
        }

        image(
            this.image,
            this.x,
            this.y,
            width,
            height
        );
    }
}