"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fruits = ["banana", "apple", "orange"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
for (const fruit of fruits) {
    console.log(fruit);
}
const students = {
    name: "sato",
    age: "25",
    from: "tokyo"
};
for (const [key, value] of Object.entries(students)) {
    console.log(key, value);
}
