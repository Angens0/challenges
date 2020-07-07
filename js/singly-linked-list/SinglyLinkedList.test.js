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
