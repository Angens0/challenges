import { Queue } from "../queue/Queue";

export const breadthFirstSearch = tree => {
    if (!tree.root) return [];

    const data = [];
    const queue = new Queue();
    queue.enqueue(tree.root);

    while (queue.length) {
        const node = queue.dequeue();

        if (node.left) {
            queue.enqueue(node.left);
        }

        if (node.right) {
            queue.enqueue(node.right);
        }

        data.push(node.value);
    }

    return data;
};
