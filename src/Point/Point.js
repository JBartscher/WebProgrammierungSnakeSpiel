"use strict"

import {StaticGameObject} from "../GameObject.js";

export default class Point extends StaticGameObject {
    constructor(x, y, w, h) {
        super(x, y, w, h);
    }
}