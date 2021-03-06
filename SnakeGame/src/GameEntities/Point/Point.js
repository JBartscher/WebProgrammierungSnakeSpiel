"use strict"

import {StaticGameObject} from "../GameObject.js";
import SpriteAnimation from "../SpriteAnimation.js";

/**
 * The Point which the Snake collect to increase the game Score is repersented by this class.
 */
export default class Point extends StaticGameObject {

    // needed for spawning logic
    static SIZE = 32;

    constructor(x, y, w, h) {
        super(x, y, w, h);
        this.animation = new SpriteAnimation("./assets/Images/Apple_Bounce_v3_animation.png", 64, 64, 12);

        this.animation.ANIMATION_DELAY = 2;
    }

    /**
     * draws the sprite animation of the bouncing point
     *
     * @param drawing context
     */
    draw(context) {
        this.animation.animate(context, this, "right")
    }
}