"use strict";

class SpriteAnimation {

    frameWidth;
    frameHeight;

    rowIndex = 0;
    columnIndex = 0;

    rowMax
    columnMax

    currentFrame = 0;
    maxFrame = 0;

    spritesheet = new Image();

    constructor(imgSrc, fW, fH, rows, columns) {
        this.spritesheet = imgSrc;

        this.frameWidth = fW;
        this.frameHeight = fH;

        this.rowMax = rows;
        this.columnMax = columns;

        this.maxFrame = rows * columns;
    }

    animate() {
        setInterval(function () {
            // Pick a new frame
            this.currentFrame++;

            // Make the frames loop
            //let maxFrame = numColumns * numRows - 1;
            if (this.currentFrame > this.maxFrame) {
                this.currentFrame = 0;
            }

            // Update rows and columns
            this.columnIndex = this.currentFrame % this.columnMax;
            this.rowIndex = Math.floor(this.currentFrame / this.rowMax);

            // Clear and draw
            //context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(this.spritesheet, this.columnIndex * this.frameWidth, this.rowIndex * this.frameHeight, this.frameWidth, this.frameHeight, 10, 30, this.frameWidth, this.frameHeight);

//Wait for next step in the loop
        }, 100).bind(this);
    }


}