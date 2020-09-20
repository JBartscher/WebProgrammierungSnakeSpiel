"use strict";

import {DynamicGameObject} from "./GameObject.js";
import IOManager from "./IOManager.js";
import Snake from "./Snake.js";

export default class Game {

    constructor() {

        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext('2d');

        this.gameObjects = new Array();

        this.oldTimeStamp = 0;
    }

    init() {

        this.context.imageSmoothingEnabled = true;
        this.context.imageSmoothingQuality = 'high';

        // var g1 = new DynamicGameObject(0, 50, 100, 100);
        // this.ioManager.bindElementToIOManager(g1);

        let snake = new Snake(this.canvas.width / 2, this.canvas.height / 2);

        new IOManager().bindElementToIOManager(snake);

        this.gameObjects.push(snake);

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

        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (var obj of this.gameObjects) {
            obj.update(timePassed);
            obj.draw(this.context);
        }

        this.drawHud();

        window.requestAnimationFrame(this.gameLoop.bind(this));
    }

    drawHud() {
        //clear canvas


        this.context.fillStyle = "#e70505";
        this.context.fillRect((this.canvas.width / 2) - 2.5, (this.canvas.height / 2) -2.5, 5, 5);

        // Draw fps to the screen
        this.context.fillStyle = 'white';
        this.context.fillRect(0, 0, 200, 100);
        this.context.font = '25px Arial';
        this.context.fillStyle = 'black';
        this.context.fillText("FPS: " + this.fps, 10, 30);
    }
}