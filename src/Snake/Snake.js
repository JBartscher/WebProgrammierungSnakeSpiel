"use strict";

import {DynamicGameObject} from "../GameObject.js";
import Tail from "./Tail.js";
import Head from "./Head.js";
import SnakeLinkedList from "./SnakeLinkedList.js";
import Segment from "./Segment.js";
import Wall from "../Wall.js";

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

        // function that will be called periodically
        let increaseGameSpeedFunction = this.increaseGameSpeed;

        // is needed to apply the context to the setInterval function
        let context = this;

        //every 3 seconds
        this.gamespeedIncreaseIntervall = setInterval(function () {
            increaseGameSpeedFunction.call(context);
        }, 5000);

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
            // collision with self or "meta" object is not meant to be handled
            if (obj instanceof Head || obj instanceof Snake) {
                continue;
            }

            if (this.head.intersects(obj)) {
                console.log("snake_head intersects, its a :" + obj);
                if (obj === this.gameRefrence.currentPoint) {
                    this.gameRefrence.addPoint(); // increases score by 1
                    this.addSegment();
                    this.tailLength++;
                } else if (obj instanceof Wall || obj instanceof Segment || obj instanceof Tail) {
                    clearInterval(this.gamespeedIncreaseIntervall);
                    this.gameRefrence.displayGameOver();
                }
            }
        }
    }

    draw(context) {
        //draw is handeld by game now
    }

    /**
     * is called periodically to increase the gamespeed every 3 seconds up to a maximum  of 3x the normal gamespeed.
     */
    increaseGameSpeed() {
        this.speedMultiplikator = this.speedMultiplikator + 0.1;
        //maximum gamespeed is 3.0
        this.speedMultiplikator = Math.min(this.speedMultiplikator, 3.0);

        console.log("the gamespeed is now: " + this.speedMultiplikator)
    }

    addSegment() {
        let newSegment = new Segment(this.tail.x, this.tail.y, 32, 32)
        newSegment.direction = this.tail.direction;
        newSegment.currentStep = this.tail.currentStep;

        this.tail.currentStep.doInvertedStep(this.tail);

        this.gameRefrence.gameObjects.push(newSegment);
        this.segments.prependBeforeTail(newSegment);
    }

}