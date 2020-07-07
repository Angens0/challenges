import { Node } from "./Node";

export class SinglyLinkedList {
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
        }

        this.tail = node;
        this.length++;

        return this;
    }

    pop() {
        if (this.length === 0) {
            return undefined;
        }

        if (this.length === 1) {
            this.length--;
            const node = this.tail;
            this.head = null;
            this.tail = null;

            return node.value;
        }

        // find new tail
        const currentTail = this.tail;
        let newTail = this.head;
        while (newTail.next !== this.tail) {
            newTail = newTail.next;
        }

        newTail.next = null;
        this.tail = newTail;
        this.length--;

        return currentTail.value;
    }

    shift() {
        if (this.length === 0) {
            return undefined;
        }

        const currentHead = this.head;
        this.head = this.head.next;
        this.length--;

        if (this.length === 0) {
            this.tail = null;
        }

        return currentHead.value;
    }

    unshift(value) {
        const newHead = new Node(value);
        newHead.next = this.head;
        this.head = newHead;
        this.length++;
        if (this.length === 1) {
            this.tail = newHead;
        }

        return this;
    }

    get(index) {
        if (index >= this.length || index < 0) return undefined;

        let current = this.head;
        for (let i = 0; index > i; i++) {
            current = current.next;
        }

        return current;
    }
}
