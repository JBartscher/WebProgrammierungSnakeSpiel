"use strict";

import SnakeIOController from "./Snake/SnakeIOController.js";
import Snake from "./Snake/Snake.js";
import PointSpawner from "./Point/PointSpawner.js";
import Wall from "./Wall.js";

const DEBUG = false;

export default class Game {

    constructor(walls = true, sound = false) {

        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext('2d');

        this.gameObjects = [];

        this.oldTimeStamp = 0;

        this.score = 0;


    }

    init(walls) {

        this.context.imageSmoothingEnabled = true;
        this.context.imageSmoothingQuality = 'high';

        // var g1 = new DynamicGameObject(0, 50, 100, 100);
        // this.ioManager.bindElementToIOManager(g1);

        let snake = new Snake(Math.floor(this.canvas.width / 2 / 32) * 32, Math.floor(this.canvas.height / 2 / 32) * 32, this);
        //let snake = new Snake(0, 0, this);

        new SnakeIOController().bindElementToIOManager(snake);
        this.gameObjects.push(snake);

        // needs to be excecutet before a new point is created to ensure that the point is not "in" a wall.
        if (walls) {
            this.createWalls();
        }
        // point that the snake can eat
        this.currentPoint = new PointSpawner(this.canvas.width, this.canvas.height).spawnNewPoint(this.gameObjects);
        this.gameObjects.push(this.currentPoint);

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
        if (DEBUG) {
            this.context.fillStyle = "#e70505";
            this.context.fillRect((this.canvas.width / 2) - 2.5, (this.canvas.height / 2) - 2.5, 5, 5);
        }

        this.drawGrid();


    }

    addPoint() {
        this.score++;
        let idx = this.gameObjects.indexOf(this.currentPoint);
        this.gameObjects.splice(idx, 1);
        this.currentPoint = new PointSpawner(this.canvas.width, this.canvas.height).spawnNewPoint(this.gameObjects);
        this.gameObjects.push(this.currentPoint);
    }

    drawGrid() {
        let ctx = this.context;
        let s = 32;
        let pL = s;
        let pT = s;
        let pR = s;
        let pB = s;

        ctx.strokeStyle = 'lightgrey'

        ctx.beginPath()
        for (var x = pL; x <= this.canvas.width - pR; x += s) {
            ctx.moveTo(x, pT)
            ctx.lineTo(x, this.canvas.height - pB)
        }
        for (var y = pT; y <= this.canvas.height - pB; y += s) {
            ctx.moveTo(pL, y)
            ctx.lineTo(this.canvas.width - pR, y)
        }
        ctx.stroke()
    }

    displayGameOver() {
        // alert("You´ve lost!. Points: " + this.score);
        this.gameObjects = [];

        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.fillStyle = "#13481c";
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

        document.getElementById("canvas").style.display = "none";
        document.getElementById("highscore_form").style.display = "flex";
        document.getElementById("highscore_form").classList.add("tilt-in-fwd-tr");

        document.getElementById("points_display").innerText = this.score;

        window.cancelAnimationFrame();


    }

    createWalls() {
        const wallLeft = new Wall(0, 0, 32, this.canvas.height);
        this.gameObjects.push(wallLeft);
        const wallRight = new Wall(this.canvas.width - 32, 0, 32, this.canvas.height);
        this.gameObjects.push(wallRight);

        const wallTop = new Wall(0, 0, this.canvas.width, 32);
        this.gameObjects.push(wallTop);
        const wallBottom = new Wall(0, this.canvas.height - 32, this.canvas.width, 32);
        this.gameObjects.push(wallBottom);
    }
}