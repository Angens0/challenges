const { BinarySearchTree } = require("./BinarySearchTree");

test("insert", () => {
    const tree = new BinarySearchTree();
    const array = [10, 5, 2, 13, 16, 7, 11, 7];

    for (const el of array) {
        tree.insert(el);
    }

    expect(tree.root.value).toEqual(10);

    expect(tree.root.left.value).toEqual(5);

    expect(tree.root.left.left.value).toEqual(2);
    expect(tree.root.left.left.left).toBeNull();
    expect(tree.root.left.left.right).toBeNull();

    expect(tree.root.left.right.value).toEqual(7);
    expect(tree.root.left.right.left).toBeNull();
    expect(tree.root.left.right.right).toBeNull();

    expect(tree.root.right.value).toEqual(13);

    expect(tree.root.right.left.value).toEqual(11);
    expect(tree.root.right.left.left).toBeNull();
    expect(tree.root.right.left.right).toBeNull();

    expect(tree.root.right.right.value).toEqual(16);
    expect(tree.root.right.right.left).toBeNull();
    expect(tree.root.right.right.right).toBeNull();
});

test("find", () => {
    const tree = new BinarySearchTree();
    const array1 = [10, 5, 2, 13, 16, 7, 11, 7];
    const array2 = [1, 6, 8, 12, -55, 0, 25];

    for (const el of array1) {
        tree.insert(el);
    }

    for (const el of array1) {
        expect(tree.find(el).value).toEqual(el);
    }

    for (const el of array2) {
        expect(tree.find(el)).toBeUndefined();
    }
});
