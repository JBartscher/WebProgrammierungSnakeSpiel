"use strict";

import Segment from "./Segment.js";
import SpriteAnimation from "../SpriteAnimation.js";
import Step from "./Step.js";

export default class Head extends Segment {

    constructor(posX, posY) {
        super(posX, posY, 64, 64);
        this.animation = new SpriteAnimation("./Assets/Snakehead.png", 64, 64, 4);
    }

    draw(context) {
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