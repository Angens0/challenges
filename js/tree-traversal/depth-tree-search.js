export const PRE_ORDER = 0;
export const IN_ORDER = 1;
export const POST_ORDER = 2;

export const depthFirst = (tree, type = PRE_ORDER) => {
    const data = [];

    const traverse = node => {
        type === PRE_ORDER && data.push(node.value);
        if (node.left) traverse(node.left);
        type === IN_ORDER && data.push(node.value);
        if (node.right) traverse(node.right);
        type === POST_ORDER && data.push(node.value);
    };

    traverse(tree.root);

    return data;
};
