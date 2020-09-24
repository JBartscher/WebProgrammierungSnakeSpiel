"use strict";


import Point from "./Point.js";
import {StaticGameObject} from "../GameObject.js";

export default class PointSpawner {
    constructor(displayWidth, displayHeight) {
        this.xMax = displayWidth - Point.SIZE;
        this.yMax = displayHeight - Point.SIZE;
    }

    spawnNewPoint(currentExisitingGameObjects) {
        // get a random position on the field
        let x = Math.floor(getRandomInt(this.xMax) / 32) * 32;
        let y = Math.floor(getRandomInt(this.yMax) / 32) * 32

        let newPoint = new StaticGameObject(x, y, Point.SIZE, Point.SIZE);

        //let newPoint = new StaticGameObject(0, 0, Point.SIZE, Point.SIZE);

        for (let obj of currentExisitingGameObjects) {
            // also handles wall detection
            if (newPoint.intersects(obj)) {
                return this.spawnNewPoint(currentExisitingGameObjects);
            }
        }
        // no collisions with existing game objects => return this point
        return newPoint;
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
