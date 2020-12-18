"use strict";


import Point from "./Point.js";
import {StaticGameObject} from "../GameObject.js";

/**
 * class which handles the spawning of new points on the playing field.
 */
export default class PointSpawner {
    constructor(displayWidth, displayHeight) {
        this.xMax = displayWidth - Point.SIZE;
        this.yMax = displayHeight - Point.SIZE;
    }

    /**
     * spawns a new point on the game field.
     *
     * the method spawns a StaticGameObject at a random position, if the position is valid (which means it does not
     * collide with any other game object like the walls and the snake) a new Point is created at that position.
     * If the position is not valid the method calls it self again until a valid position is found.
     * The delete of the old point is handled by the game entity.
     *
     * @param currentExisitingGameObjects list of all current game objects
     * @returns {*|Point} returns a new point entity
     */
    spawnNewPoint(currentExisitingGameObjects) {
        // get a random position on the field
        let x = Math.floor(getRandomInt(this.xMax) / 32) * 32;
        let y = Math.floor(getRandomInt(this.yMax) / 32) * 32

        let newPoint = new StaticGameObject(x, y, Point.SIZE, Point.SIZE);

        for (let obj of currentExisitingGameObjects) {
            // also handles wall detection
            if (newPoint.intersects(obj)) {
                return this.spawnNewPoint(currentExisitingGameObjects);
            }
        }
        // no collisions with existing game objects => return this point
        return new Point(newPoint.x, newPoint.y, Point.SIZE, Point.SIZE);
    }
}

/**
 * returns a random number in a interval from 0 to max.
 *
 * @param max biggest number that the random int should produce
 * @returns {number} a random number
 */
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
