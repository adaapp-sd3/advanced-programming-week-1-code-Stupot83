class Crop {
    constructor(type, field, x, y) {
        this.type = type;
        this._image = loadImage('./images/' + type.toLowerCase() + '.png');
        this.health = 0;
        this.field = field;
        this._x = x;
        this._y = y;
        this._birthstamp = millis() / 1000;
        this._width = 1;
        this._height = 1;
        this._healthySize = 30;
        this.draw();
    }

    getBirthStamp() {
        return this._birthstamp;
    }

    getAge() {
        return millis() / 1000 - this.getBirthStamp();
    }

    getHealthySize() {
        return this._healthySize;
    }

    getWidth() {
        return this._width;
    }

    getHeight() {
        return this._height;
    }

    getImage() {
        return this._image;
    }

    getXPosition() {
        return this._x;
    }

    getYPosition() {
        return this._y;
    }

    draw() {

        if (this.getAge() < this.getHealthySize()) {
            var width = this.getWidth() * this.getAge();
            var height = this.getHeight() * this.getAge();
        } else {
            var width = 30;
            var height = 30;
        }

        image(
            this.getImage(),
            this.getXPosition(),
            this.getYPosition(),
            width,
            height
        );
    }
}