import { Node } from "./Node";

export class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const node = new Node(value);

        if (!this.root) {
            this.root = node;
            return this;
        }

        let current = this.root;
        while (true) {
            if (value == current.value) return undefined;
            const side = value < current.value ? "left" : "right";

            if (!current[side]) {
                current[side] = node;
                return this;
            }

            current = current[side];
        }
    }

    find(value) {
        if (!this.root) return undefined;

        let current = this.root;
        while (true) {
            if (value == current.value) return current;
            const side = value < current.value ? "left" : "right";

            if (!current[side]) {
                return undefined;
            }

            current = current[side];
        }
    }
}
