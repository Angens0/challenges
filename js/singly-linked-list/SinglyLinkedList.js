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
}
