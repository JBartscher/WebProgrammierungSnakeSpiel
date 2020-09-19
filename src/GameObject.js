"use strict";

import {easeLinear} from "./UtilFunctions.js";
import {Vector2D} from "./Vector2D.js";

class GameObject {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;

        this.w = w;
        this.h = h;
    }

    update(timePassed) {

    }

    toString() {
        return '(' + this.constructor.name + ', ' + this.x + ', ' + this.y + ')';
    }

    draw(context) {
        context.fillStyle = "#1d5998";
        context.fillRect(this.x, this.y, this.w, this.h);
    }
}

class DynamicGameObject extends GameObject {

    constructor(x, y, w, h, easeFunction = easeLinear) {
        super(x, y, w, h);

        this.moving = false

        this.from = null;
        this.to = null;
        this.duration = null;

        this.easeFunction = easeFunction;
    }

    /** Vector2D*/

    setMoveVector(from, to, duration) {
        this.from = from;
        this.to = to;
        this.duration = duration;
    }

    update(timePassed) {
        super.update(timePassed);

        this.x = this.moving === true ? this.easeFunction(timePassed, this.from.x, this.to.x, this.duration) : this.x;
        this.y = this.moving === true ? this.easeFunction(timePassed, this.from.y, this.to.y, this.duration) : this.y;
    }

}

class StaticGameObject extends GameObject {
    update(timePassed) {
        super.update(timePassed);
    }
}

export {DynamicGameObject, StaticGameObject};

