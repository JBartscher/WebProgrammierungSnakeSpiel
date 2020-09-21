"use strict"

import {StaticGameObject} from "../GameObject.js";

export default class Point extends StaticGameObject {
    static SIZE = 16;

    constructor(x, y, w, h) {
        super(x, y, SIZE, SIZE);
    }
}