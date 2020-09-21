"use strict";

import {DynamicGameObject, intersects} from "../GameObject.js";
import Tail from "./Tail.js";
import Head from "./Head.js";
import SnakeLinkedList from "./SnakeLinkedList.js";
import Segment from "./Segment.js";

export default class Snake extends DynamicGameObject {

    gameRefrence;

    tailLength = 1;

    direction = "left";

    speedMultiplikator = 1; // movementspeed

    segments = new SnakeLinkedList();

    constructor(posX, posY, gameRef) {
        super(posX, posY, 0, 0);

        this.gameRefrence = gameRef;

        //this.animation = new SpriteAnimation("../Assets/Snakehead.png", 64,64,4);

        this.head = new Head(posX, posY, 64, 64);
        this.head.changeDirection("left");

        this.tail = new Tail(this.head.x + 64, posY, 64, 64);
        this.tail.changeDirection("left");

        let firstSegment = new Segment(this.head.x + 32, posY, 64, 64)
        firstSegment.changeDirection("left");

        this.segments.append(this.head)
        this.segments.append(this.tail)
        this.segments.prependBeforeTail(firstSegment);

        this.gameRefrence.gameObjects.push(this.head);
        this.gameRefrence.gameObjects.push(this.tail);
        this.gameRefrence.gameObjects.push(firstSegment);

        console.log(this.segments);
    }


    step_i = 0;
    step_max = 32;

    update(timePassed) {
        super.update(timePassed);

        this.step_i = (this.step_i + 1 + timePassed) * this.speedMultiplikator;

        if (this.step_i > this.step_max) {
            this.step_i = 0
            for (let segment of this.segments) {
                segment.currentStep.doStep(segment);
                this.check_collisions();
            }
            // cycles the steps through the snake segments
            this.segments.cycle();
        }
    }

    check_collisions() {
        for (let obj of this.gameRefrence.gameObjects) {
            if (intersects(this.head, obj)) {
                alert("snake_head intersects")
            }
        }

    }

    draw(context) {
        //draw is handeld by game now
    }
}