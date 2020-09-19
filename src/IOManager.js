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
                // code for "down arrow" key press.
                var vFrom = new Vector2D(this.elem.x, this.elem.y);
                var vTo = new Vector2D(this.elem.x, this.elem.y - 500);

                this.elem instanceof DynamicGameObject ? this.elem.setMoveVector(vFrom, vTo, 1.5) : console.log("ehh");
                this.elem.moving = true;
                break;
            case "ArrowUp":
                // code for "up arrow" key press.
                var vFrom = new Vector2D(this.elem.x, this.elem.y);
                var vTo = new Vector2D(this.elem.x , this.elem.y + 500);

                this.elem instanceof DynamicGameObject ? this.elem.setMoveVector(vFrom, vTo, 1.5) : console.log("ehh");
                this.elem.moving = true;
                break;
            case "ArrowLeft":
                // code for "left arrow" key press.
                var vFrom = new Vector2D(this.elem.x, this.elem.y);
                var vTo = new Vector2D(this.elem.x - 500, this.elem.y);

                this.elem instanceof DynamicGameObject ? this.elem.setMoveVector(vFrom, vTo, 1.5) : console.log("ehh");
                this.elem.moving = true;
                break;
            case "ArrowRight":
                // code for "right arrow" key press.
                var vFrom = new Vector2D(this.elem.x, this.elem.y);
                var vTo = new Vector2D(this.elem.x + 500, this.elem.y);

                this.elem instanceof DynamicGameObject ? this.elem.setMoveVector(vFrom, vTo, 1.5) : console.log("ehh");
                this.elem.moving = true;
                break;
            default:
                return; // Quit when this doesn't handle the key event.
        }
    }

    bindElementToIOManager(elem){
        this.elem = elem;
    }

}