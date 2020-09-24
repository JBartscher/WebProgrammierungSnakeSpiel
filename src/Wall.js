"use strict";

import {StaticGameObject} from "./GameObject.js";

const WALL_COLOR = "#212121"

export default class Wall extends StaticGameObject{
    constructor(x, y, w, h) {
        super(x, y, w, h);
    }

    draw(context) {
        context.fillStyle = WALL_COLOR;
        context.fillRect(this.x, this.y, this.w, this.h);
    }

}