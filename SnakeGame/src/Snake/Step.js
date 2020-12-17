"use strict";

const STEP_LENGTH = 32;

export default class Step{

    constructor(direction) {
        this.direction = direction;
    }

    /**
     * executes the current step while taking care of not getting out of bounds.
     *
     * @param segment which will be moved
     */
    doStep(segment){
        // needed to calculate if a segment leaves the game screen
        const canvas = document.getElementById('canvas');

        switch (this.direction) {
            case "left":
                // code for "left" step
                segment.x = segment.x - STEP_LENGTH;
                // 0 - Step length so the "teleport" is done when the snake actully leaves the screen
                if(segment.x <= 0 - STEP_LENGTH){
                    segment.x = canvas.width;
                }
                break;
            case "right":
                // code for "right" step
                segment.x = segment.x + STEP_LENGTH;
                if(segment.x > canvas.width){
                    segment.x = 0;
                }
                break;
            case "up":
                // code for "up" step
                segment.y = segment.y - STEP_LENGTH;
                // 0 - Step length so the "teleport" is done when the snake actully leaves the screen
                if(segment.y < 0 - STEP_LENGTH){
                    segment.y = canvas.height;
                }
                break;
            case "down":
                // code for "down" step
                segment.y = segment.y + STEP_LENGTH;
                if(segment.y > canvas.height){
                    segment.y = 0;
                }
                break;
            default:
                return; // Quit when this doesn't handle the key event.
        }
        //
        segment.changeDirection(this.direction);

    }

    /**
     * Does an inverted step.
     * Necessary to let the tail do a step in the opposite direction of which it moves to make space for a new segment.
     * @param segment segment which will be moved opposite to its current step direction
     */
    doInvertedStep(segment){

        switch (this.direction) {
            case "left":
                // code for "left" step
                segment.x = segment.x + STEP_LENGTH;
                break;
            case "right":
                // code for "right" step
                segment.x = segment.x - STEP_LENGTH;
                break;
            case "up":
                // code for "up" step
                segment.y = segment.y + STEP_LENGTH;
                break;
            case "down":
                // code for "down" step
                segment.y = segment.y - STEP_LENGTH;
                break;
            default:
                return; // Quit when this doesn't handle the key event.
        }
        //
        segment.changeDirection(this.direction);

    }
}