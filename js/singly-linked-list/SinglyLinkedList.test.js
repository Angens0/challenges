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

test("unshift", () => {
    const { list, array } = createTestSuite();
    const newList = new SinglyLinkedList();

    for (let i = array.length - 1; i >= 0; i--) {
        newList.unshift(array[i]);
        expect(newList.head.value).toEqual(array[i]);
    }

    expect(newList).toEqual(list);
});

test("get", () => {
    const { list, array } = createTestSuite();

    for (let i = 0; i < array.length; i++) {
        expect(list.get(i).value).toEqual(array[i]);
    }

    expect(list.get(array.length)).toBeUndefined();
    expect(list.get(-1)).toBeUndefined();
});

test("set", () => {
    const { list, array } = createTestSuite();

    expect(list.set(-1, 5)).toBeFalsy();
    expect(list.set(array.length, 5)).toBeFalsy();

    const [index, value] = [1, -5353];
    array[index] = value;
    expect(list.set(index, value)).toBeTruthy();

    for (let i = 0; i < array.length; i++) {
        expect(list.get(i).value).toEqual(array[i]);
    }

    expect(list.length).toEqual(array.length);
});

test("insert", () => {
    const { list, array } = createTestSuite();

    expect(list.insert(-1, 5)).toBeFalsy();
    expect(list.insert(array.length + 1, 5)).toBeFalsy();

    const [index, value] = [1, -5353];
    array.splice(index, 0, value);
    expect(list.insert(index, value)).toBeTruthy();

    for (let i = 0; i < array.length; i++) {
        expect(list.get(i).value).toEqual(array[i]);
    }

    expect(list.length).toEqual(array.length);
});

test("remove", () => {
    const { list, array } = createTestSuite();

    expect(list.remove(-1)).toBeUndefined();
    expect(list.remove(array.length)).toBeUndefined();

    const index = 2;
    expect(list.remove(index)).toEqual(array.splice(index, 1)[0]);

    for (let i = 0; i < array.length; i++) {
        expect(list.get(i).value).toEqual(array[i]);
    }

    expect(list.length).toEqual(array.length);
});
