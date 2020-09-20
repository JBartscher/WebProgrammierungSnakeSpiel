"use strict";

import {DynamicGameObject} from "./GameObject.js";
import {Vector2D} from "./Vector2D.js";

export default class IOManager {

    constructor() {
        window.addEventListener("keydown", this.handleInput.bind(this));
    }

    handleInput(event) {
        if (event.defaultPrevented) {
            return; // Do nothing if the event was already processed
        }

        switch (event.key) {
            case "ArrowDown":
                this.elem.changeDirection("down");
                this.elem.vx = 0;
                this.elem.vy = + this.elem.speed;
                break;
            case "ArrowUp":
                // code for "up arrow" key press.
                this.elem.changeDirection("up");
                this.elem.vx = 0;
                this.elem.vy = -this.elem.speed;
                break;
            case "ArrowLeft":
                // code for "left arrow" key press.
                this.elem.changeDirection("left");
                this.elem.vx = -this.elem.speed;
                this.elem.vy = 0;
                break;
            case "ArrowRight":
                // code for "right arrow" key press.
                this.elem.changeDirection("right");
                this.elem.vx = this.elem.speed;
                this.elem.vy = 0;
                break;
            default:
                return; // Quit when this doesn't handle the key event.
        }
    }

    bindElementToIOManager(elem){
        this.elem = elem;
    }

}