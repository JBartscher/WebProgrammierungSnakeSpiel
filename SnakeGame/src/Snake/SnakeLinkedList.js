"use strict";

import LinkedList, {ListNode} from "../lib/LinkedList.js"

/**
 * The snake as an object has an structure of a double linked list which is represented by this class.
 * Each segment knows its predecessor and successor.
 * The Step logic needs this data structure to pass steps along the chain.
 */
export default class SnakeLinkedList extends LinkedList {

    /**
     * prepends an element before the last element in the list.
     *
     * @param data which will be prepended
     */
    prependBeforeTail(data) {
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

    /**
     * cycle passes each step one segment further to the end.
     *
     * The head of the SnakeLinkedList is ignored as it gets his current step directly by the users input.
     */
    cycle() {

        let lastStep = this.head.data.currentStep;

        for (let segment of this) {
            if (segment === this.head.data) {
                continue;
            }
            let tmp = segment.currentStep;
            segment.currentStep = lastStep;
            lastStep = tmp;
        }
    }
}