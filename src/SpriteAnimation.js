"use strict";

export default class SpriteAnimation {

    frameWidth;
    frameHeight;

    currentFrame = 0;
    maxFrame = 0;

    fpsCount = 0;
    ANIMATION_FPS = 8;

    SCALE_FACTOR = 2;

    spritesheet;

    constructor(imgSrc, fW, fH, maxFrame) {

        this.spritesheet = new Image();

        this.spritesheet.onload = () => {

            console.log("image is loaded");

        };

        this.spritesheet.src = imgSrc;

        this.frameWidth = fW;
        this.frameHeight = fH;

        this.maxFrame = maxFrame;
    }

    animate(context, obj, direction) {

        this.fpsCount++;

        if (this.fpsCount > this.ANIMATION_FPS) {

            this.fpsCount = 0;

            this.currentFrame++

            if (this.currentFrame > this.maxFrame) {
                this.currentFrame = 0;
            }
        }


        context.save();
        context.translate(obj.x, obj.y);

        this.drawDirectional(direction, context);

        context.restore();
    }

    drawDirectional(direction, context) {

        let sx = this.currentFrame * this.frameWidth;
        let sy = 0;

        let sWidth = this.frameWidth;
        let sHeight = this.frameHeight;

        switch (direction) {
            case "left":
                context.drawImage(this.spritesheet, sx, sy, sWidth, sHeight,
                    0 - sWidth / 4, // pos x
                    0 - sWidth / 4, // pos y
                    sWidth / 2, sHeight / 2 );
                break;
            case "right":
                context.scale(1, -1)
                context.rotate(180 * Math.PI / 180);
                context.drawImage(this.spritesheet, sx, sy, sWidth, sHeight,
                    0 - sWidth / 4, // pos x
                    0 - sHeight / 4, // pos y
                    sWidth / 2,
                    sHeight/ 2 );
                break;
            case "up":
                context.rotate(90 * Math.PI / 180);
                context.drawImage(this.spritesheet, sx, sy, sWidth, sHeight,
                    0 - sWidth / 4, // pos x
                    0 - sHeight / 4, // pos y
                    sWidth / 2, sHeight / 2);

                break;
            case "down":
                //context.scale(-1, 1)
                context.rotate(270 * Math.PI / 180);
                context.drawImage(this.spritesheet, sx, sy, sWidth, sHeight,
                    0 - sWidth / 4, // pos x
                    0 - sHeight / 4, // pos y
                    sWidth / 2, sHeight / 2);

                break;
            default:
                break;
            /**
             * src from: https://www.w3schools.com/tags/canvas_drawimage.asp
             * drawImage(image: CanvasImageSource, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): void;
             *
             * image: Image to draw <-- Mandatory
             * sx: The x coordinate where to start clipping
             * sy: The y coordinate where to start clipping
             * sWidth: The width of the clipped image
             * sHeight: The height of the clipped image
             * x: The x coordinate where to place the image on the canvas <-- Mandatory
             * y: The x coordinate where to place the image on the canvas <-- Mandatory
             * width: The width of the image to use (stretch or reduce the image)
             * height: The height of the image to use (stretch or reduce the image)

             */
        }
    }

}

function foo(self) {
    self.currentFrame++;

    if (self.currentFrame > self.maxFrame) {
        self.currentFrame = 0;
    }
    console.log(self.currentFrame);
    return self.currentFrame;
}