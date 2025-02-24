"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fruits = ["banana", "apple", "orange"];
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
    var fruit = fruits_1[_i];
    console.log(fruit);
}
var students = {
    name: "sato",
    age: "25",
    from: "tokyo"
};
for (var _a = 0, _b = Object.entries(students); _a < _b.length; _a++) {
    var _c = _b[_a], key = _c[0], value = _c[1];
    console.log(key, value);
}
