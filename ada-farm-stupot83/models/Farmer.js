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

    getActiveField() {
        return this._field;
    }

    setActiveField(field) {
        this._field = field;
    }

    get userName() {
        return this._userName;
    }

    set userName(newUserName) {
        this._userName = newUserName;
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

    update() {
        if (keyIsDown(RIGHT_ARROW)) {
            this.xPosition = this.xPosition + 3;
        }
        if (keyIsDown(LEFT_ARROW)) {
            this.xPosition = this.xPosition - 3;
        }
        if (keyIsDown(DOWN_ARROW)) {
            this.yPosition = this.yPosition + 3;
        }
        if (keyIsDown(UP_ARROW)) {
            this.yPosition = this.yPosition - 3;
        }

    }

    farmerKeyPressed() {
        
        if (keyCode == ENTER) {
            this.getActiveField().plant(this.xPosition, this.yPosition);
        }
    }

    draw() {
        var bobAmount = Math.sin(millis() / 60) * 3;

        image(
            this.image,
            this.xPosition,
            this.yPosition + bobAmount,
            this.width,
            this.height
        );
    }
} // End of the Farmer class oooarrr