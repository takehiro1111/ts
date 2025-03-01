// 1. 関数宣言
function multiply(a, b) {
  return a * b;
}
console.log(multiply(5, 4)); // 20

// 2. 関数式（名前付き関数）
const factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1);
};
console.log(factorial(5)); // 120

// 3. 関数式（無名関数）
const divide = function (a, b) {
  return a / b;
};
console.log(divide(20, 5)); // 4

let fruits = (name,age=30) => ({
  name: name,
  age: age
});
console.log(fruits("apple"))

// 4. アロー関数
const square = (x) => x * x;
console.log(square(8)); // 64

// 5. アロー関数（複数の処理）
const greet = (name) => {
  const message = `こんにちは、${name}さん！`;
  return message;
};
console.log(greet('田中')); // こんにちは、田中さん！

// 6. メソッド定義（オブジェクトの中の関数）
const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
};
console.log(calculator.add(10, 5)); // 15
console.log(calculator.subtract(10, 5)); // 5

// 7. コンストラクタ関数
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    return `私は${this.name}、${this.age}歳です。`;
  };
}
const john = new Person('ジョン', 30);
console.log(john.greet()); // 私はジョン、30歳です。

// 8. ジェネレータ関数
function* idGenerator() {
  let id = 1;
  while (true) {
    yield id++;
  }
}
const ids = idGenerator();
console.log(ids.next().value); // 1
console.log(ids.next().value); // 2

// 9. 即時実行関数 (IIFE)
(function () {
  const secret = '非公開変数';
  console.log('この関数は定義と同時に実行されます');
})();

// 10. async/await関数
async function fetchData() {
  try {
    // 実際のAPIリクエストをシミュレート
    const data = await new Promise((resolve) =>
      setTimeout(() => resolve('データが取得できました'), 1000)
    );
    return data;
  } catch (error) {
    console.error('エラーが発生しました:', error);
  }
}
