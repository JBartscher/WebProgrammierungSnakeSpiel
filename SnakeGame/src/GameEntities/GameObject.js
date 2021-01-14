"use strict";

import {easeLinear} from "../lib/UtilFunctions.js";

/**
 * Base class for all dynamic and static game objects.
 */
class GameObject {

    static DEFAULT_DRAW_COLOR = "#c34d4d";

    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;

        this.w = w;
        this.h = h;
    }

    /**
     * method which is called for every instance of game objects and its derived kind in the game loop.
     * @param timePassed timePassed since last update call.
     */
    update(timePassed) {
        // nothing to handle
    }

    toString() {
        return '(' + this.constructor.name + ', ' + this.x + ', ' + this.y + ')';
    }

    /**
     * method which is called for every instance of game objects and its derived kind in the game loop to draw
     * the entity.
     *
     * @param context the canvas draw-context
     */
    draw(context) {
        context.fillStyle = GameObject.DEFAULT_DRAW_COLOR;
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

    /**
     * checks if a object is out of bounds. This is done by utilizing the intersects function with a temporarily
     * created StaticGameObject which has the size of the whole canvas.
     *
     * @returns {boolean} true if is out og bounds otherwise false
     */
    outOfBounds(){
        const canvas = document.getElementById('canvas');
        let other = new StaticGameObject(0,0,canvas.width, canvas.height);
        return !this.intersects(other);

    }
}

/**
 * Base class for every game object that changes its position or has any kind of movement.
 */
class DynamicGameObject extends GameObject {

    constructor(x, y, w, h, easeFunction = easeLinear) {
        super(x, y, w, h);
        this.from = null;
        this.to = null;
        this.duration = null;

        this.easeFunction = easeFunction;
    }

    update(timePassed) {
        super.update(timePassed);
    }

}

/**
 * Base class for every game object that stays where it is initialized
 */
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

export {DynamicGameObject, StaticGameObject};

