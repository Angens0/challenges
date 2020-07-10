import { BinarySearchTree } from "../binary-search-tree/BinarySearchTree";
import { breadthFirstSearch } from "./breadth-first-search";

test("empty tree", () => {
    const tree = new BinarySearchTree();

    expect(breadthFirstSearch(tree)).toEqual([]);
});

test("[324, 5, 32, 6, -5, 2, -77, 0, -41]", () => {
    const array = [324, 5, 32, 6, -5, 2, -77, 0, -41];
    const tree = new BinarySearchTree();

    for (const el of array) {
        tree.insert(el);
    }

    const data = breadthFirstSearch(tree);
    expect(data.sort((a, b) => a - b)).toEqual(array.sort((a, b) => a - b));
});
