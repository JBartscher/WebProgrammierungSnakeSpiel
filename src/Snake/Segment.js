"use strict";

import {DynamicGameObject} from "../GameObject.js";

export default class Segment extends DynamicGameObject {

    SCALE_FACTOR = 2;
    SEGMENT_SPRITE = "./Assets/Snakesegment.png"

    constructor(x, y, w, h) {
        super(x, y, w, h);

        this.sprite = new Image();

        this.sprite.onload = () => {

            console.log("segment image is loaded");

        };

        this.sprite.src = this.SEGMENT_SPRITE;
    }

    changeDirection(direction) {
        this.direction = direction;
    }

    draw(context) {
        context.save();
        context.translate(this.x, this.y);

        this.drawDirectional(this.direction, context);

        context.restore();
    }

    drawDirectional(direction, context) {
        switch (this.direction) {
            case "left":
                context.drawImage(this.sprite,
                    0 - this.w / 4, // pos x
                    0 - this.h / 4, // pos y
                    this.w / this.SCALE_FACTOR,
                    this.h / this.SCALE_FACTOR);
                break;
            case "right":
                context.scale(1, -1)
                context.rotate(180 * Math.PI / 180);
                context.drawImage(this.sprite,
                    0 - this.w / 4, // pos x
                    0 - this.h / 4, // pos y
                    this.w / this.SCALE_FACTOR,
                    this.h / this.SCALE_FACTOR);
                break;
            case "up":
                context.rotate(90 * Math.PI / 180);
                context.drawImage(this.sprite,
                    0 - this.w / 4, // pos x
                    0 - this.h / 4, // pos y
                    this.w / this.SCALE_FACTOR, this.h / this.SCALE_FACTOR);

                break;
            case "down":
                //context.scale(-1, 1)
                context.rotate(270 * Math.PI / 180);
                context.drawImage(this.sprite,
                    0 - this.w / 4, // pos x
                    0 - this.h / 4, // pos y
                    this.w / this.SCALE_FACTOR, this.h / this.SCALE_FACTOR);
                break;
            default:
                break;
        }
    }
}