class Crop {
    constructor(type, field, x, y) {
        this._type = type;
        this._image = loadImage('./images/' + type.toLowerCase() + '.png');
        this._health = 0;
        this._field = field;
        this._x = x;
        this._y = y;
        this._birthstamp = millis() / 1000;
        this._width = 1;
        this._height = 1;
        this._healthySize = 30;
        this.draw();
    }

    getType() {
        return this._type;
    }

    setType(type) {
        this._type = type;
    }

    getHealth() {
        return this._health;
    }

    setHealth(health) {
        this._health = health;
    }

    getField() {
        return this._field;
    }

    setField(field) {
        this._field = field;
    }

    getBirthStamp() {
        return this._birthstamp;
    }

    setBirthStamp(birthstamp) {
        this._birthstamp = birthstamp;
    }

    getAge() {
        return millis() / 1000 - this.getBirthStamp();
    }

    getHealthySize() {
        return this._healthySize;
    }

    setHealthySize(healthysize) {
        this._healthySize = healthysize;
    }

    getWidth() {
        return this._width;
    }

    setWidth(width) {
        this._width = width;
    }

    getHeight() {
        return this._height;
    }

    setHeight(height) {
        this._height = height;
    }

    getImage() {
        return this._image;
    }

    setImage(image) {
        this._image = image;
    }

    getXPosition() {
        return this._x;
    }

    setXPosition(x) {
        this._x = x;
    }

    getYPosition() {
        return this._y;
    }

    setYPosition(y) {
        this._y = y;
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