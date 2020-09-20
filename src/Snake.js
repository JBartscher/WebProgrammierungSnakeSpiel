"use strict";

import {DynamicGameObject} from "./GameObject.js";
import SpriteAnimation from "./SpriteAnimation.js";

export default class Snake extends DynamicGameObject {

    framehight = 64;
    framewidth = 64;

    tailLength = 1;
    direction = "left";

    vx = 0; //velocity x
    vy = 0; //velocity y

    speed = 100; // movementspeed


    constructor(posX, posY) {
        super(posX, posY, 16, 16);
        this.animation = new SpriteAnimation("./Assets/Snakehead.png", 64,64,4);

    }

    changeDirection(direction){
        this.direction = direction;
    }

    update(timePassed) {
        super.update(timePassed);

        this.x = this.x + this.vx * timePassed;
        this.y = this.y + this.vy * timePassed;
    }

    draw(context){
        this.animation.animate(context, this, this.direction);
    }
}