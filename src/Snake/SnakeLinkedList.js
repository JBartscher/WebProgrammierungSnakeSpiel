"use strict";

import LinkedList from "../lib/LinkedList.js"
import {ListNode} from "../lib/LinkedList.js";

export default class SnakeLinkedList extends LinkedList{

    prependBeforeTail(data){
        let node = new ListNode(data);

        if (this.isEmpty()) {
            throw("prependBeforeTail() is only allowed when the snake is properly initialized (eg. has head and tail)");
        } else {
            this.tail.prev.next = node;
            this.tail.prev = node;
            node.next = this.tail;
        }
        this.length++;
    }

    cycle(nextStep){

        let lastStep = this.head.data.currentStep;

        for (let segment of this){
            if(segment == this.head.data){
                continue;
            }
            let tmp = segment.currentStep;
            segment.currentStep = lastStep;
            lastStep = tmp;
        }
    }
}