"use strict";

/**
 * class that represents a SpriteAnimation which is a tiled image of a known hight and width.
 * Each draw call of a object that is animated (like the snake head) the method animate is called. The animation has
 * its own counter to only change the current sprite in a specific Frame count (standard is 8 FPS).
 */
export default class SpriteAnimation {

    frameWidth;
    frameHeight;

    currentFrame = 0;
    maxFrame = 0;

    fpsCount = 0;
    ANIMATION_DELAY = 8; // the shorter the delay, the faster the animation

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

    /**
     * Method that draws a sprite animation which is composed of several images of the same width and height
     * in a single image file which are drawn one after another with a fixed interval between them.
     *
     * Note that the animate method only traverses columns of a single "row" in a tiled image.
     * It cannot change into the next row. This could be done by multiplication of 'sy' in the drawDirectional() method.
     * I noticed that all the sprite animation images contain only one row. Therefore,
     * no logic was needed to traverse possible further rows. This also ensures that I do not need a nested loop for
     * drawing animations.
     *
     * @param context of canvas to draw
     * @param obj is the game object that is going to be animated
     * @param direction in which the sprite faces
     */
    animate(context, obj, direction) {

        this.fpsCount++;
        // every 8 draw calls the drawn image changes
        if (this.fpsCount > this.ANIMATION_DELAY) {

            this.fpsCount = 0;

            this.currentFrame++

            if (this.currentFrame > this.maxFrame) {
                this.currentFrame = 0;
            }
        }

        context.save();
        // by translating the object, we can save some linear matrix calculation.
        // We just turn the image in the needed degree, draw it and restore its position.
        context.translate(obj.x, obj.y);
        this.drawDirectional(direction, context);
        context.restore();
    }

    /**
     * draws a picture depending on the direction in which it is facing.
     *
     * @param direction in which the sprite "looks"
     * @param context of canvas to draw
     */
    drawDirectional(direction, context) {

        let sx = this.currentFrame * this.frameWidth;
        let sy = 0;

        let sWidth = this.frameWidth;
        let sHeight = this.frameHeight;

        switch (direction) {
            case "left":
                context.drawImage(this.spritesheet, sx, sy, sWidth, sHeight,
                    0, // pos x
                    0, // pos y
                    sWidth / 2, sHeight / 2);
                break;
            case "right":
                context.scale(1, -1)
                context.rotate(180 * Math.PI / 180);
                context.drawImage(this.spritesheet, sx, sy, sWidth, sHeight,
                    0 - 32, // pos x
                    0, // pos y
                    sWidth / 2,
                    sHeight / 2);
                break;
            case "up":
                context.rotate(90 * Math.PI / 180);
                // context.scale(-1, 1)
                context.drawImage(this.spritesheet, sx, sy, sWidth, sHeight,
                    0, // pos x
                    0 - 32, // pos y
                    sWidth / 2, sHeight / 2);

                break;
            case "down":
                context.rotate(270 * Math.PI / 180);
                // context.scale(1, -1)
                // context.rotate(270 * Math.PI / 180);
                context.drawImage(this.spritesheet, sx, sy, sWidth, sHeight,
                    0 - 32, // pos x
                    0, // pos y
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
