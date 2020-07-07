import { SinglyLinkedList } from "./SinglyLinkedList";

const createTestSuite = () => {
    const array = [23, 1, -55, 99];
    const list = new SinglyLinkedList();

    for (const el of array) {
        list.push(el);
    }

    return { list, array };
};

test("push", () => {
    const { list, array } = createTestSuite();

    expect(list.length).toEqual(array.length);

    let current = list.head;

    for (const el of array) {
        expect(current.value).toEqual(el);
        current = current.next;
    }

    expect(current).toBeNull();
});

test("pop", () => {
    const { list, array } = createTestSuite();

    while (array.length) {
        expect(list.pop()).toEqual(array.pop());
        expect(list.length).toEqual(array.length);
    }

    expect(list.length).toEqual(0);
    expect(list.tail).toBeNull();
    expect(list.head).toBeNull();
    expect(list.pop()).toBeUndefined();
});

test("shift", () => {
    const { list, array } = createTestSuite();

    while (array.length) {
        expect(list.shift()).toEqual(array.shift());
        expect(list.length).toEqual(array.length);
    }

    expect(list.length).toEqual(0);
    expect(list.tail).toBeNull();
    expect(list.head).toBeNull();
    expect(list.shift()).toBeUndefined();
});
