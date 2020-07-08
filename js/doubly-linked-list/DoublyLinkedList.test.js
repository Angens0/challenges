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

test("pop", () => {
    const { array, list } = createTestSuite();

    do {
        expect(list.tail.next).toBeNull();
        expect(list.pop()).toEqual(array.pop());
        expect(list.length).toEqual(array.length);
    } while (array.length);

    expect(list.pop()).toBeUndefined();
    expect(list.length).toEqual(0);

    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
});

test("shift", () => {
    const { array, list } = createTestSuite();

    do {
        expect(list.head.prev).toBeNull();
        expect(list.shift()).toEqual(array.shift());
        expect(list.length).toEqual(array.length);
    } while (array.length);

    expect(list.shift()).toBeUndefined();
    expect(list.length).toEqual(0);

    expect(list.head).toBeNull();
    expect(list.tail).toBeNull();
});

test("unshift", () => {
    const { array, list: pushedList } = createTestSuite();

    const unshiftedList = new DoublyLinkedList();
    for (let i = array.length - 1; i >= 0; i--) {
        unshiftedList.unshift(array[i]);
    }

    expect(unshiftedList).toEqual(pushedList);
});

test("get", () => {
    const { array, list } = createTestSuite();

    for (let i = -1; i <= array.length; i++) {
        expect(list.get(i)?.value).toEqual(array[i]);
    }
});

test("set", () => {
    const { array, list } = createTestSuite();

    expect(list.set(-1, 55)).toBeFalsy();
    expect(list.set(array.length, 55)).toBeFalsy();

    const [index, value] = [2, -77];
    array[index] = value;
    expect(list.set(index, value)).toBeTruthy();

    for (let i = -1; i <= array.length; i++) {
        expect(list.get(i)?.value).toEqual(array[i]);
    }
});
