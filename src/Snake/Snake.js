"use strict";

import {DynamicGameObject} from "../GameObject.js";
import Tail from "./Tail.js";
import Head from "./Head.js";
import SnakeLinkedList from "./SnakeLinkedList.js";
import Segment from "./Segment.js";

export default class Snake extends DynamicGameObject {

    framehight = 64;
    framewidth = 64;

    tailLength = 1;
    direction = "left";

    vx = 0; //velocity x
    vy = 0; //velocity y

    speed = 100; // movementspeed

    segments = new SnakeLinkedList();

    constructor(posX, posY) {
        super(posX, posY, 0, 0);
        //this.animation = new SpriteAnimation("../Assets/Snakehead.png", 64,64,4);

        this.head = new Head(posX, posY, 64, 64);
        this.head.changeDirection("left");

        this.tail = new Tail(this.head.x + 64, posY, 64, 64);
        this.tail.changeDirection("left");

        let firstSegment = new Segment(this.head.x + 32, posY, 64, 64)
        firstSegment.changeDirection("left");

        this.segments.append(this.head)
        this.segments.append(this.tail)
        this.segments.append(firstSegment);
    }


    hop_i = 0;
    hop_max = 32;

    update(timePassed) {
        super.update(timePassed);

        this.hop_i++;

        if (this.hop_i > this.hop_max) {
            this.x = this.x + this.vx * timePassed;
            this.y = this.y + this.vy * timePassed;
        }
        /*
                this.x = this.x + this.vx * timePassed;
        this.y = this.y + this.vy * timePassed;

        for (var segment of this.segments){
            segment.x = segment.x + this.vx * timePassed;
            segment.y = segment.y + this.vy * timePassed;
        }
        */

    }

    draw(context) {
        for (let segment of this.segments) {
            segment.draw(context);
        }
    }
}