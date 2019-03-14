class Field {
    constructor(name, health, x, y, width, height) {
        this._name = name;
        this._health = health;
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
        this._crops = [];
        this._animals = [];
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

    getAnimals() {
        return this._animals;
    }

    setAnimals() {
        this._animals = animals;
    }

    draw() {
        stroke('#7c4011');
        strokeWeight(10);
        fill('#b58969');
        rect(this.getXPosition(), this.getYPosition(), this.getWidth(), this.getHeight(), 10);
        for (var crop of this.getCrops()) {
            crop.draw();
        }
        for (var animal of this.getAnimals()) {
            animal.draw();
        }
    }

    plant(x, y) {
        var cropName = this.getName().split(' ');
        var animalName = this.getName().split(' ');

        if (cropName[0] == "Carrot") {
            this.getCrops().push(new Crop(cropName[0], this, x, y));
            console.log('new plant');
        }
        if (cropName[0] == "Pumpkin") {
            this.getCrops().push(new Crop(cropName[0], this, x, y));
            console.log('new plant');
        }
        if (cropName[0] == "Wheat") {
            this.getCrops().push(new Crop(cropName[0], this, x, y));
            console.log('new plant');
        }
        if (animalName[0] == "Cow") {
            this.getAnimals().push(new Animal(animalName[0], this, x, y));
            console.log('new animal');
        }
        if (animalName[0] == "Pig") {
            this.getAnimals().push(new Animal(animalName[0], this, x, y));
            console.log('new animal');
        }
        if (animalName[0] == "Sheep") {
            this.getAnimals().push(new Animal(animalName[0], this, x, y));
            console.log('new animal');
        }
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