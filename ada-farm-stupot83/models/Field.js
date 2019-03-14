class Field {
    constructor(name, health, x, y, width, height) {
        this._name = name;
        this._health = health;
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
        this._crops = [];
    }

    getName() {
        return this._name;
    }

    setName(name) {
        this._name = name;
    }

    getHealth() {
        return this._health;
    }

    setHealth(health) {
        this._health = health;
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

    getCrops() {
        return this._crops;
    }

    setCrops() {
        this._crops = crops;
    }

    draw() {
        stroke('#7c4011');
        strokeWeight(10);
        fill('#b58969');
        rect(this.getXPosition(), this.getYPosition(), this.getWidth(), this.getHeight(), 10);
        for (var crop of this.getCrops()) {
            crop.draw();
        }
    }

    plant(x, y) {
        console.log('new plant');
        // Get the crop name from the field name
        var cropName = this.name.split(' '); // => e.g. "Wheat"
        // Add a new crop to the field's list of crops
        this.getCrops().push(new Crop(cropName[0], this, x, y));
    }

    containsPoint(x, y) {
        var top = this.getYPosition();
        var bottom = this.getYPosition() + this.getHeight();
        var left = this.getXPosition();
        var right = this.getXPosition() + this.getWidth();

        var isInVerticalRange = y > top && y < bottom;
        var isInHorizontalRange = x > left && x < right;

        return isInHorizontalRange && isInVerticalRange;
    }
}