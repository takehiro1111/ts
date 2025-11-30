export {};

// クラス図 演習2
interface Shape {
  calcArea(): number;
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}

  calcArea(): number {
    return this.width * this.height
  }
}

class Circle implements Shape {
   constructor(private radius: number) {}

  calcArea(): number {
    return this.radius * this.radius * Math.PI
  }
}

class Client {
  constructor(private shape: Shape) {}

  printArea(): void {
    console.log(this.shape.calcArea());
  }
}

const rect = new Rectangle(10, 5);
const circle = new Circle(3);

const client1 = new Client(rect);
const client2 = new Client(circle);

client1.printArea(); // 50
client2.printArea(); // 28.27...
