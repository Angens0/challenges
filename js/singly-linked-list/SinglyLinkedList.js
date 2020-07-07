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

    set(index, value) {
        const node = this.get(index);
        if (!node) {
            return false;
        }

        node.value = value;
        return true;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) {
            return false;
        }

        if (index === 0) {
            this.unshift(value);
            return true;
        }

        if (index === this.length) {
            this.push(value);
            return true;
        }

        const prevNode = this.get(index - 1);
        const nextNode = prevNode.next;

        const newNode = new Node(value);
        newNode.next = nextNode;
        prevNode.next = newNode;
        this.length++;

        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }

        if (index === 0) {
            return this.shift();
        }

        if (index === this.length - 1) {
            return this.pop();
        }

        const prevNode = this.get(index - 1);
        const currentNode = prevNode.next;

        prevNode.next = currentNode.next;

        this.length--;
        return currentNode.value;
    }
}
