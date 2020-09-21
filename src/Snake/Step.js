"use strict";

const STEP_LENGTH = 32;

export default class Step{

    constructor(direction) {
        this.direction = direction;
    }

    doStep(segment){

        switch (this.direction) {
            case "left":
                // code for "left" step
                segment.x = segment.x - STEP_LENGTH;
                break;
            case "right":
                // code for "right" step
                segment.x = segment.x + STEP_LENGTH;
                break;
            case "up":
                // code for "up" step
                segment.y = segment.y - STEP_LENGTH;
                break;
            case "down":
                // code for "down" step
                segment.y = segment.y + STEP_LENGTH;
                break;
            default:
                return; // Quit when this doesn't handle the key event.
        }
        //
        segment.changeDirection(this.direction);

    }
}