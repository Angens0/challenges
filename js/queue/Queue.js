import { SinglyLinkedList } from "../singly-linked-list/SinglyLinkedList";

export class Queue {
    constructor() {
        this.items = new SinglyLinkedList();
    }

    get length() {
        return this.items.length;
    }

    enqueue(value) {
        this.items.push(value);
    }

    dequeue() {
        return this.items.shift();
    }
}
