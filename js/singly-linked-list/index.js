import { SinglyLinkedList } from "./SinglyLinkedList";

const list = new SinglyLinkedList();
console.log(list);

list.push(5);
console.log(list);

list.push(7);
console.log(list);

list.push(25);
console.log(list);

let popped = list.pop();
console.log("Popped value:\n", popped);
console.log(list);

popped = list.pop();
console.log("Popped value:\n", popped);
console.log(list);

popped = list.pop();
console.log("Popped value:\n", popped);
console.log(list);

popped = list.pop();
console.log("Popped value:\n", popped);
console.log(list);
