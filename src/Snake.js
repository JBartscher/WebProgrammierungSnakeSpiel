"use strict";

import {DynamicGameObject} from "./GameObject.js";

export default class Snake extends DynamicGameObject {

    framehight = 64;
    framewidth = 64;

    currentFrame

    constructor(posX, posY) {
        super(posX, posY, 16, 16);
        this.img = new Image()
        this.img.src = "../Assets/Snakehead.png"
    }
}