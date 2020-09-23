"use strict";

import {DynamicGameObject, intersects, overlaps} from "../GameObject.js";
import Tail from "./Tail.js";
import Head from "./Head.js";
import SnakeLinkedList from "./SnakeLinkedList.js";
import Segment from "./Segment.js";
import Point from "../Point/Point.js";

export default class Snake extends DynamicGameObject {

    gameRefrence;

    tailLength = 2; // number of segments + tail but without the head

    direction = "left";

    speedMultiplikator = 1; // movementspeed

    segments = new SnakeLinkedList();

    constructor(posX, posY, gameRef) {

        console.log("x:" + posX + " y:" + posY);
        super(posX, posY, 0, 0);

        this.gameRefrence = gameRef;

        //this.animation = new SpriteAnimation("../Assets/Snakehead.png", 64,64,4);

        this.head = new Head(posX, posY, 32, 32);
        this.head.changeDirection("left");

        this.tail = new Tail(this.head.x + 64, posY, 32, 32);
        this.tail.changeDirection("left");

        let firstSegment = new Segment(this.head.x + 32, posY, 32, 32)
        firstSegment.changeDirection("left");

        this.segments.append(this.head)
        this.segments.append(this.tail)
        this.segments.prependBeforeTail(firstSegment);

        this.gameRefrence.gameObjects.push(this.head);
        this.gameRefrence.gameObjects.push(this.tail);
        this.gameRefrence.gameObjects.push(firstSegment);

        console.log(this.segments);

        let increaseGameSpeedFunction = this.increaseGameSpeed;
        let contxt = this;

        //every 3 seconds
        setInterval(function () {
            increaseGameSpeedFunction.call(contxt);
        }, 3000);

    }


    step_i = 0;
    step_max = 32;

    update(timePassed) {
        super.update(timePassed);

        this.step_i = (this.step_i + 1 + timePassed) * this.speedMultiplikator;
        this.check_collisions();
        if (this.step_i > this.step_max) {
            this.step_i = 0
            for (let segment of this.segments) {
                segment.currentStep.doStep(segment);
            }
            this.check_collisions();
            // cycles the steps through the snake segments
            this.segments.cycle();
        }
    }

    check_collisions() {
        for (let obj of this.gameRefrence.gameObjects) {
            if (overlaps(this.head, obj)) {
                if (obj === this.gameRefrence.currentPoint) {
                    this.gameRefrence.addPoint();

                    let newSegment = new Segment(this.tail.x, this.tail.y, 32, 32)
                    newSegment.direction = this.tail.direction;
                    newSegment.currentStep = this.tail.currentStep;

                    this.tail.currentStep.doInvertedStep(this.tail);

                    this.gameRefrence.gameObjects.push(newSegment);
                    this.segments.prependBeforeTail(newSegment);

                    this.tailLength++;
                }
                console.log("snake_head overlaps");
            }
        }

    }

    draw(context) {
        //draw is handeld by game now
    }

    increaseGameSpeed() {
        this.speedMultiplikator = this.speedMultiplikator + 0.1;
        //maximum gamespeed is 3.0
        this.speedMultiplikator = Math.min(this.speedMultiplikator, 3.0);

        console.log("the gamespeed is now: " + this.speedMultiplikator)
    }


}