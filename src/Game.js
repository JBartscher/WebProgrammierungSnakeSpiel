"use strict";

import {DynamicGameObject} from "./GameObject.js";
import IOManager from "./IOManager.js";

export default class Game {

    constructor(){
        this.ioManager = new IOManager();

        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext('2d');

        this.gameObjects = new Array();

        this.oldTimeStamp = 0;
    }

    init() {

        this.context.imageSmoothingEnabled = true;
        this.context.imageSmoothingQuality = 'high';

        var g1 = new DynamicGameObject(0, 50, 100, 100);
        this.ioManager.bindElementToIOManager(g1);
        this.gameObjects.push(g1);

        // Start the first frame request
        window.requestAnimationFrame(this.gameLoop.bind(this));
    }

    gameLoop(timeStamp) {
        // Calculate the number of seconds passed since the last frame
        let timePassed = (timeStamp - this.oldTimeStamp) / 1000;
        // Move forward in time with a maximum amount
        timePassed = Math.min(timePassed, 0.1);
        this.oldTimeStamp = timeStamp;

        // Calculate fps
        this.fps = Math.round(1 / timePassed);

        this.draw();

        for (var obj of this.gameObjects) {
            obj.update(timePassed);
            obj.draw(this.context);
        }

        window.requestAnimationFrame(this.gameLoop.bind(this));
    }

    draw() {
        //clear canvas
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw fps to the screen
        this.context.fillStyle = 'white';
        this.context.fillRect(0, 0, 200, 100);
        this.context.font = '25px Arial';
        this.context.fillStyle = 'black';
        this.context.fillText("FPS: " + this.fps, 10, 30);
    }
}