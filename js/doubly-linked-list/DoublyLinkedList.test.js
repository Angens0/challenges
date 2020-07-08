import { DoublyLinkedList } from "./DoublyLinkedList";

const createTestSuite = () => {
    const array = [-5, 76, 12, 53495, -21, 0];
    const list = new DoublyLinkedList();

    for (const el of array) {
        list.push(el);
    }

    return { array, list };
};

test("push", () => {
    const { array, list } = createTestSuite();

    expect(list.head.prev).toBeNull();
    expect(list.tail.next).toBeNull();
    expect(list.length).toEqual(array.length);

    // traverse from head to tail
    let currentNode = list.head;
    for (const el of array) {
        expect(currentNode.value).toEqual(el);
        currentNode = currentNode.next;
    }

    // traverse from tail to head
    currentNode = list.tail;
    for (let i = array.length - 1; i >= 0; i--) {
        expect(currentNode.value).toEqual(array[i]);
        currentNode = currentNode.prev;
    }
});
