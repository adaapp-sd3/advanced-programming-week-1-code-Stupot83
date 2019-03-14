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

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    get health() {
        return this._health;
    }

    set health(newHealth) {
        this._health = newHealth;
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

    get crops() {
        return this._crops;
    }

    set crops(newCrops) {
        this._crops = newCrops;
    }

    get animals() {
        return this._animals;
    }

    set animals(newAnimals) {
        this._animals = newAnimals;
    }

    draw() {
        stroke('#7c4011');
        strokeWeight(10);
        fill('#b58969');
        rect(this.xPosition, this.yPosition, this.width, this.height, 10);
        for (var crop of this.crops) {
            crop.draw();
        }
        for (var animal of this.animals) {
            animal.draw();
        }
    }

    plant(x, y) {
        var cropName = this.name.split(' ');
        var animalName = this.name.split(' ');

        if (cropName[0] == "Carrot") {
            this.crops.push(new Crop(cropName[0], this, x, y));
            console.log('new plant');
        }
        if (cropName[0] == "Pumpkin") {
            this.crops.push(new Crop(cropName[0], this, x, y));
            console.log('new plant');
        }
        if (cropName[0] == "Wheat") {
            this.crops.push(new Crop(cropName[0], this, x, y));
            console.log('new plant');
        }
        if (animalName[0] == "Cow") {
            this.animals.push(new Animal(animalName[0], this, x, y));
            console.log('new animal');
        }
        if (animalName[0] == "Pig") {
            this.animals.push(new Animal(animalName[0], this, x, y));
            console.log('new animal');
        }
        if (animalName[0] == "Sheep") {
            this.animals.push(new Animal(animalName[0], this, x, y));
            console.log('new animal');
        }
    }

    containsPoint(x, y) {
        var top = this.yPosition;
        var bottom = this.yPosition + this.height;
        var left = this.xPosition;
        var right = this.xPosition + this.width;

        var isInVerticalRange = y > top && y < bottom;
        var isInHorizontalRange = x > left && x < right;

        return isInHorizontalRange && isInVerticalRange;
    }
}