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

    get type() {
        return this._type;
    }

    set type(newType) {
        this._type = newType;
    }

    get health() {
        return this._health;
    }

    set health(newHealth) {
        this._health = newHealth;
    }

    get field() {
        return this._field;
    }

    set field(newField) {
        this._field = newField;
    }

    get birthStamp() {
        return this._birthstamp;
    }

    set birthStamp(newBirthstamp) {
        this._birthstamp = newBirthstamp;
    }

    get age() {
        return millis() / 1000 - this.birthStamp;
    }

    get healthySize() {
        return this._healthySize;
    }

    set healthySize(newHealthysize) {
        this._healthySize = newHealthysize;
    }

    get width() {
        return this._width;
    }

    set width(newWidth) {
        this._width = newWidth;
    }

    get height() {
        return this._height;
    }

    set height(newHeight) {
        this._height = newHeight;
    }

    get image() {
        return this._image;
    }

    set image(newImage) {
        this._image = newImage;
    }

    get xPosition() {
        return this._x;
    }

    set xPosition(newX) {
        this._x = newX;
    }

    get yPosition() {
        return this._y;
    }

    set yPosition(newY) {
        this._y = newY;
    }

    draw() {

        if (this.age < this.healthySize) {
            var width = this.width * this.age;
            var height = this.height * this.age;
        } else {
            var width = 30;
            var height = 30;
        }

        image(
            this.image,
            this.xPosition,
            this.yPosition,
            width,
            height
        );
    }
}