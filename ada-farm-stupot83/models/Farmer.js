class Farmer {
    constructor(userName) {
        this._field = null;
        this._userName = userName;
        this._image = loadImage('./images/farmer.png');
        this._x = 100;
        this._y = 100;
        this._width = 60;
        this._height = 60;
    }

    speak(words) {
        alert(words);
    }

    setActiveField(field) {
        this._field = field;
    }

    getField() {
        return this._field;
    }

    setField(field) {
        this._field = field;
    }

    getUserName() {
        return this._userName;
    }

    setUserName(userName) {
        this._userName = userName;
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

    update() {
        if (keyIsDown(RIGHT_ARROW)) {
            this.setXPosition(this.getXPosition() + 3);
        }
        if (keyIsDown(LEFT_ARROW)) {
            this.setXPosition(this.getXPosition() - 3);
        }
        if (keyIsDown(DOWN_ARROW)) {
            this.setYPosition(this.getYPosition() + 3);
        }
        if (keyIsDown(UP_ARROW)) {
            this.setYPosition(this.getYPosition() - 3);
        }

    }

    farmerKeyPressed() {
        
        if (keyCode == ENTER) {
            this.getField().plant(this.getXPosition(), this.getYPosition());
        }
    }

    draw() {
        var bobAmount = Math.sin(millis() / 60) * 3;

        image(
            this.getImage(),
            this.getXPosition(),
            this.getYPosition() + bobAmount,
            this.getWidth(),
            this.getHeight()
        );
    }
} // End of the Farmer class oooarrr