"use strict";

import {StaticGameObject} from "./GameObject.js";
import Game from "../Game.js";

const WALL_COLOR = "#000000"

export default class Wall extends StaticGameObject {
    constructor(x, y, w, h) {
        super(x, y, w, h);
    }

    draw(context) {
        context.fillStyle = WALL_COLOR;
        context.fillRect(this.x, this.y, this.w, this.h);
    }

    /**
     * creates static wall-objects which frame the playing field.
     */
    static createWalls() {
        const game = new Game(); //the game Singleton, which will be initialized by this point

        const wallLeft = new Wall(0, 0, 32, game.canvas.height);
        game.gameObjects.push(wallLeft);

        const wallRight = new Wall(game.canvas.width - 32, 0, 32, game.canvas.height);
        game.gameObjects.push(wallRight);

        const wallTop = new Wall(0, 0, game.canvas.width, 32);
        game.gameObjects.push(wallTop);

        const wallBottom = new Wall(0, game.canvas.height - 32, game.canvas.width, 32);
        game.gameObjects.push(wallBottom);
    }

}