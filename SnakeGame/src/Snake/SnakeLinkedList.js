"use strict";

import LinkedList, {ListNode} from "../lib/LinkedList.js"

export default class SnakeLinkedList extends LinkedList{

    prependBeforeTail(data){
        let node = new ListNode(data);

        if (this.isEmpty()) {
            throw("prependBeforeTail() is only allowed when the snake is properly initialized (eg. has head and tail)");
        } else {
            // setting new references
            node.prev = this.tail.prev
            node.next = this.tail;

            // update prev next
            node.prev.next = node;

            // update tail prev
            this.tail.prev = node;
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