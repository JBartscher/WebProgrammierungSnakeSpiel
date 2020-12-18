"use strict";

import SnakeIOController from "./Snake/SnakeIOController.js";
import Snake from "./Snake/Snake.js";
import PointSpawner from "./Point/PointSpawner.js";
import Wall from "./Wall.js";
import SoundManager from "./Sound/SoundManager.js";
import Grid from "./Grid.js";

/**
 * Game-class is a lazy singleton to access attributes like width and hight of the canvas on runtime.
 * This is needed to handle e.g. the game mode without walls.
 */
let instance;

export default class Game {

    constructor() {

        if (instance) {
            return instance;
        }

        instance = this;

        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext('2d');

        this.gameObjects = [];

        this.oldTimeStamp = 0;

        this.score = 0;
    }

    init(walls, sound) {
        this.context.imageSmoothingEnabled = true;
        this.context.imageSmoothingQuality = 'high';

        // places the snake in the middle of the screen.
        let snake = new Snake(Math.floor(this.canvas.width / 2 / 32) * 32, Math.floor(this.canvas.height / 2 / 32) * 32, this);
        // binds the SnakeIOController to the snake so user input is registered correctly.
        new SnakeIOController().bindElementToIOManager(snake);
        this.gameObjects.push(snake);

        // needs to be executed before a new point is created to ensure that the point is not "in" a wall.
        if (walls) {
            Wall.createWalls();
            this.wallsEnabled = true;
        } else {
            this.wallsEnabled = false;
        }

        if (sound) {
            SoundManager.playGameMusic();
        }
        // point that the snake can eat. Must be created after walls and the snake are created to ensure no collision
        // before the game starts.
        this.currentPoint = new PointSpawner(this.canvas.width, this.canvas.height).spawnNewPoint(this.gameObjects);
        this.gameObjects.push(this.currentPoint);

        // Start the first frame request
        window.requestAnimationFrame(this.gameLoop.bind(this));
    }

    /**
     * this is the heart of the game. The game loop is called multiple times per second and the time passed
     * between each call is saved. In each call each game object which is derived of the GameObject gets a
     * update and a draw call which should be implemented (the base method just does nothing).
     * After each call the game loop calls the window for a AnimationFrame and binds itself to it. Therefore it gets
     * called again and again by each frame.
     *
     * @param timeStamp timeStamp when the method is called.
     */
    gameLoop(timeStamp) {
        // Calculate the number of seconds passed since the last frame
        let timePassed = (timeStamp - this.oldTimeStamp) / 1000;
        // Move forward in time with a maximum amount, this is done to not let the game progress when the tab/window is
        // not active.
        timePassed = Math.min(timePassed, 0.1);
        this.oldTimeStamp = timeStamp;

        // Calculate fps
        this.fps = Math.round(1 / timePassed);

        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // handle and draw each game object
        for (let obj of this.gameObjects) {
            obj.update(timePassed);
            obj.draw(this.context);
        }

        this.drawGrid();

        window.requestAnimationFrame(this.gameLoop.bind(this));
    }

    /**
     * draws a grid to the canvas. Either with walls or without.
     */
    drawGrid() {
        if (this.wallsEnabled) {
            Grid.drawGrid();
        } else {
            Grid.drawGridWithoutWalls();
        }
    }

    /**
     * Method which will be called everytime the snake collides with a point.
     * Adds one point to the current score, deletes the old point and creates a new one on the game field.
     */
    addPoint() {
        this.score++;
        SoundManager.playPickUp();
        let idx = this.gameObjects.indexOf(this.currentPoint);
        document.getElementById("score").innerText = this.score.toString();

        this.gameObjects.splice(idx, 1);
        this.currentPoint = new PointSpawner(this.canvas.width, this.canvas.height).spawnNewPoint(this.gameObjects);
        this.gameObjects.push(this.currentPoint);
    }

    /**
     * when the game ends this method displays the highscore form, frees all game objects and hides the canvas.
     */
    displayGameOver() {
        // free all game objects
        this.gameObjects = [];

        SoundManager.pauseGameMusic();
        SoundManager.playGameOver();

        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.fillStyle = "#13481c";
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

        document.getElementById("canvas").style.display = "none";
        document.getElementById("highscore_form").style.display = "flex";
        document.getElementById("highscore_form").classList.add("tilt-in-fwd-tr");

        document.getElementById("points_display").innerText = this.score;

        window.cancelAnimationFrame(0);
    }
}