"use strict";

import Segment from "./Segment.js";
import SpriteAnimation from "../SpriteAnimation.js";
import Step from "./Step.js";

/**
 * class which represents the head of the snake.
 */
export default class Head extends Segment {

    constructor(x, y, w, h) {
        super(x, y, w, h);
        this.animation = new SpriteAnimation("./Assets/Images/Snakehead.png", 64, 64, 4);
    }

    draw(context) {
        // draws the sprite animation of the snake head
        this.animation.animate(context, this, this.direction)
    }

    /**
     * change the direction in which the snake is moving.
     *
     * On change of the direction the current step is also changed.
     * @param direction
     */
    changeDirection(direction) {
        super.changeDirection(direction);
        this.currentStep = new Step(direction);
    }

    update(timePassed) {
        /**
         * any collision handling or other update related stuff is done by the snake object.
         */
        super.update(timePassed);
    }

}