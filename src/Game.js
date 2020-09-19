"use strict";

import {DynamicGameObject} from "./GameObject.js";

export default class Game {

    canvas;
    context;
    oldTimeStamp;
    fps;
    gameObjects;

    constructor() {
        this.canvas = document.getElementById('canvas');
        this.context = canvas.getContext('2d');
        this.gameObjects = new Array();

        this.oldTimeStamp = 0;
    }

    init() {
        // Get a reference to the canvas
        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext('2d');

        this.gameObjects.push(new DynamicGameObject(0, 50, 100, 100));

        // Start the first frame request
        window.requestAnimationFrame(this.gameLoop.bind(this));
    }

    gameLoop(timeStamp) {
        // Calculate the number of seconds passed since the last frame
        let timePassed = (timeStamp - this.oldTimeStamp) / 1000;
        // Move forward in time with a maximum amount
        timePassed = Math.min(timePassed, 0.1);
        this.oldTimeStamp = timeStamp;


        // Draw number to the screen
        this.context.fillStyle = 'white';
        this.context.fillRect(0, 0, 200, 100);
        this.context.font = '25px Arial';
        this.context.fillStyle = 'black';
        this.context.fillText("FPS: " + this.fps, 10, 30);

        // Calculate fps
        this.fps = Math.round(1 / timePassed);

        for (var obj of this.gameObjects) {
            obj.update(timePassed);
            obj.draw(this.context);
        }

        // this.draw();

        window.requestAnimationFrame(this.gameLoop.bind(this));
    }

    draw() {
        //clear canvas
        context.clearRect(0, 0, canvas.width, canvas.height);


        let randomColor = Math.random() > 0.5 ? '#ff8080' : '#8d4747';
        context.fillStyle = randomColor;
        context.fillRect(100, 50, 200, 175);
    }
}