import { Node } from "./Node";

export class DoublyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(value) {
        const node = new Node(value);

        if (this.length === 0) {
            this.head = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
        }

        this.tail = node;
        this.length++;
    }

    pop() {
        if (this.length === 0) {
            return undefined;
        }

        const last = this.tail;
        const prev = last.prev;
        this.tail = prev;
        this.length--;

        if (this.length === 0) {
            this.head = null;
        } else {
            prev.next = null;
        }

        // prevents list.pop().prev if pop() returns a node or reference to the node exists outside of the list
        last.prev = null;
        return last.value;
    }

    shift() {
        if (this.length === 0) {
            return undefined;
        }

        const first = this.head;
        const next = first.next;
        this.head = next;
        this.length--;

        if (this.length === 0) {
            this.tail = null;
        } else {
            next.prev = null;
        }

        first.next = null;
        return first.value;
    }

    unshift(value) {
        const node = new Node(value);

        if (this.length === 0) {
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
        }

        this.head = node;
        this.length++;
    }
}
