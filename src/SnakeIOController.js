"use strict";

export default class SnakeIOController {

    constructor() {
        window.addEventListener("keydown", this.handleInput.bind(this));
    }

    handleInput(event) {
        if (event.defaultPrevented) {
            return; // Do nothing if the event was already processed
        }

        switch (event.key) {
            case "ArrowDown":
                this.elem.head.changeDirection("down");
                break;
            case "ArrowUp":
                // code for "up arrow" key press.
                this.elem.head.changeDirection("up");
                break;
            case "ArrowLeft":
                // code for "left arrow" key press.
                this.elem.head.changeDirection("left");
                break;
            case "ArrowRight":
                // code for "right arrow" key press.
                this.elem.head.changeDirection("right");
                break;
            default:
                return; // Quit when this doesn't handle the key event.
        }
    }

    bindElementToIOManager(elem){
        this.elem = elem;
    }

}