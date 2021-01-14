"use strict";

/**
 * double chained Linked List data structure.
 *
 * apparently js has no own implementation of a linked list data structure which is suiting my needs.
 */
export default class LinkedList {

    length = 0;

    constructor() {
        this.head = null;
        this.tail = null;

        this.length = 0;
    }

    /**
     * append element.
     *
     * @param data which will be appended
     */
    append(data) {
        let node = new ListNode(data);

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

    /**
     * prepend element.
     *
     * This method is not used in this game project, because we need a specific method to prepend before the last
     * element. Nevertheless its here if someone will need it in the future.
     *
     * @param data which will be prepended
     */
    prepend(data) {
        let node = new ListNode(data);

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

    /**
     * get length of the list
     *
     * @returns {number} of elements in List
     */
    getLength() {
        return this.length;
    }

    /**
     * check if the list is empty or not.
     *
     * @returns {boolean} is empty
     */
    isEmpty() {
        return this.length <= 0;
    }

    /**
     * iterator to iterate over the linked list.
     *
     * @returns {Generator<null|*, void, *>}
     */
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

/**
 * Node in List
 */
class ListNode {

    constructor(data, prev = null, next = null) {
        this.prev = prev;
        this.next = next;
        this.data = data;
    }

    /**
     * check if this is the last element in the list.
     *
     * @returns {boolean} has next
     */
    hasNext() {
        return this.next != null;
    }
}

export {ListNode}