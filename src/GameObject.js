"use strict";

import {easeLinear} from "./UtilFunctions.js";

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
        super.update(timePassed);;
    }

}

class StaticGameObject extends GameObject {

    constructor(x, y, w, h) {
        super(x, y, w, h);
    }

    update(timePassed) {
        super.update(timePassed);
    }
}

function intersects(a, b){
        return (a.x + a.w) < (b.x + b.w)
            && (a.x) > (b.x)
            && (a.y) > (b.y)
            && (a.y + a.h) < (b.y + b.h);
}


export {DynamicGameObject, StaticGameObject, intersects};

