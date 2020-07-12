import {
    depthFirst,
    PRE_ORDER,
    IN_ORDER,
    POST_ORDER,
} from "./depth-tree-search";
import { BinarySearchTree } from "../binary-search-tree/BinarySearchTree";

test("PreOrder", () => {
    const array1 = [-5, 12, 60, 0, -3, 124, -6543];
    const tree1 = new BinarySearchTree();

    for (const el of array1) {
        tree1.insert(el);
    }

    const array2 = depthFirst(tree1, PRE_ORDER);
    expect(array2.length).toEqual(array1.length);
    const tree2 = new BinarySearchTree();
    for (const el of array2) {
        tree2.insert(el);
    }

    expect(tree2).toEqual(tree1);
});

test("InOrder", () => {
    const array1 = [-5, 12, 60, 0, -3, 124, -6543];
    const tree = new BinarySearchTree();

    for (const el of array1) {
        tree.insert(el);
    }

    const array2 = depthFirst(tree, IN_ORDER);
    expect(array2).toEqual(array1.sort((a, b) => a - b));
});

test("InOrder", () => {
    const array1 = [-5, 12, 60, 0, -3, 124, -6543];
    const tree = new BinarySearchTree();

    for (const el of array1) {
        tree.insert(el);
    }

    const array2 = depthFirst(tree, POST_ORDER);
    expect(array2).toEqual([-6543, -3, 0, 124, 60, 12, -5]);
});
