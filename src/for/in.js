"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const students = {
    name: 'sato',
    age: 25,
    from: 'tokyo',
};
for (const key in students) {
    console.log(key);
    console.log(students[key]);
}
// interface Student {
//   name: string;
//   age: number;  // 数値型に変更
//   from: string;
// }
// const students: Student  = {
//   name: "sato",
//   age: 25,
//   from: "tokyo"
// }
// for (const key in students) {
//   if (Object.prototype.hasOwnProperty.call(students, key)) {
//     // keyの型を明示的に指定
//     const k = key as keyof Student;
//     console.log(k, students[k]);
//   }
// }
// for (const key in students) {
//   console.log(key, students[key]);
// }
