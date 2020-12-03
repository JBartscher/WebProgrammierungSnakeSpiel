"use strict";

export default class LinkedList {

    length = 0;

    constructor() {
        this.head = null;
        this.tail = null;

        this.length = 0;

    }

    append(data) {
        let node = new ListNode(data)

        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
    }

    prepend(data) {
        let node = new ListNode(data)

        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }

        this.length++;
    }

    getLength() {
        return this.length;
    }

    isEmpty() {
        return this.length <= 0;
    }

    * [Symbol.iterator]() {
        if (this.isEmpty()) {
            yield null;
        }

        let listItem = this.head;

        do {
            yield listItem.data;

            listItem = listItem.next;
        }
        while (listItem.hasNext())

        yield this.tail.data;

    };
}

class ListNode {

    constructor(data, prev = null, next = null) {
        this.prev = prev;
        this.next = next;
        this.data = data;
    }

    hasNext() {
        return this.next != null;
    }
}

export {ListNode}