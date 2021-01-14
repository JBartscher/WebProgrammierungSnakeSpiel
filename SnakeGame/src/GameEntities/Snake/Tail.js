"use strict"

import Segment from "./Segment.js";

/**
 * End of the Snake. Last Segment.
 */
export default class Tail extends Segment{

    TAIL_SPRITE = "./assets/Images/Snaketail.png"

    constructor(x,y,w,h) {
        super(x,y,w,h);

        this.sprite = new Image();

        this.sprite.onload = () => {
            console.log("tail image is loaded");
        };

        this.sprite.src = this.TAIL_SPRITE;
    }

    draw(context) {
        super.draw(context);
    }
}