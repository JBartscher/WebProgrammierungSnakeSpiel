"use strict";

import Segment from "./Segment.js";
import SpriteAnimation from "../SpriteAnimation.js";
import Step from "./Step.js";

export default class Head extends Segment {

    constructor(x, y, w, h) {
        // w/2 to ensure the snake "fits" in the grid
        super(x, y, w, h);
        this.animation = new SpriteAnimation("./Assets/Snakehead.png", 64, 64, 4);
    }

    draw(context) {
        // context.fillStyle = "#cf991a";
        // context.fillRect(this.x, this.y, this.w, this.h);

        this.animation.animate(context, this, this.direction)
    }

    changeDirection(direction) {
        super.changeDirection(direction);

        this.currentStep = new Step(direction);
    }

    update(timePassed) {
        super.update(timePassed);
    }

}