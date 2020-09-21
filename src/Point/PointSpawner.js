"use strict";



import Point from "./Point.js";
import {intersects, StaticGameObject} from "../GameObject.js";

export default class PointSpawner{
    constructor(displayWidth, displayHeight) {
        this.xMax = displayWidth - Point.SIZE;
        this.yMax = displayHeight - Point.SIZE;
    }

    spawnNewPoint( currentExisitingGameObjects ){
        let x = getRandomInt(this.xMax);
        let y = getRandomInt(this.yMax);

        let newPoint = new StaticGameObject(x,y, Point.SIZE, Point.SIZE);

        for (let obj of currentExisitingGameObjects){
            if(intersects(newPoint, obj)){
                this.spawnNewPoint(currentExisitingGameObjects);
                return;
            }
            return newPoint;
        }
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
