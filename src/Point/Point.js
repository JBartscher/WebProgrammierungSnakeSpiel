"use strict"

import {StaticGameObject} from "../GameObject.js";

export default class Point extends StaticGameObject {
    static SIZE = 32;

    constructor(x, y, w, h) {
        alert("position x: " + x + " y: "+  y);
        super(x + SIZE /4, y, SIZE, SIZE);
    }
}