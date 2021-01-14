"use strict";

import {DynamicGameObject} from "../GameObject.js";
import Step from "./Step.js";

export default class Segment extends DynamicGameObject {
    SEGMENT_SPRITE = "./assets/Images/Snakesegment.png"
    currentStep;

    constructor(x, y, w, h, direction = "left") {
        super(x, y, w, h);
        // default Step
        this.currentStep = new Step(direction);

        // Sprite
        this.sprite = new Image();
        this.sprite.onload = () => {
            console.log("segment image is loaded");
        };
        this.sprite.src = this.SEGMENT_SPRITE;
    }

    changeDirection(direction) {
        if (!['left', 'right', 'up', 'down'].includes(direction)) {
            throw ("Invalid direction");
        }
        this.direction = direction;
    }

    update(timePassed) {
        super.update(timePassed);
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
                    0, // pos x
                    0, // pos y
                    this.w,
                    this.h);
                break;
            case "right":
                context.scale(1, -1)
                context.rotate(180 * Math.PI / 180);
                context.drawImage(this.sprite,
                    0 - 32, // pos x
                    0, // pos y
                    this.w,
                    this.h);
                break;
            case "up":
                context.rotate(90 * Math.PI / 180);
                context.drawImage(this.sprite,
                    0, // pos x
                    0 - 32, // pos y
                    this.w, this.h);

                break;
            case "down":
                //context.scale(-1, 1)
                context.rotate(270 * Math.PI / 180);
                context.drawImage(this.sprite,
                    0 - 32, // pos x
                    0, // pos y
                    this.w, this.h);
                break;
            default:
                break;
        }
    }
}