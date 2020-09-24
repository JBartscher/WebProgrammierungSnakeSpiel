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
        context.fillStyle = "#c34d4d";
        context.fillRect(this.x, this.y, this.w, this.h);
    }

    /**
     * checks whether this placeble intersects with anotehr one. It is important to note that the offset is only
     * computed from this object, not both.
     *
     * @param other the other placeble
     * @return true if intersects otherwise false
     */
    intersects(other) {
        return (this.x < other.x + other.w &&
            this.x + this.w > other.x &&
            this.y < other.y + other.h &&
            this.y + this.h > other.y);
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
        ;
    }

}

class StaticGameObject extends GameObject {

    constructor(x, y, w, h) {
        super(x, y, w, h);
    }

    update(timePassed) {
        super.update(timePassed);
    }

    draw(context) {
        super.draw(context);
    }
}

function overlaps(a, b) {
    if (a === b) {
        return false;
    }
    return a.x === b.x && a.y === b.y;
}


export {DynamicGameObject, StaticGameObject};

