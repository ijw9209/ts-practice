//interface
//Shape 라는 인터페이스 선언
interface Shape2 {
    getArea(): number; //Shape interface 에는 getArea 라는 함수가 꼭 있어야 하며 해당 함수의 반환값은 숫자입니다.
}

class Circle2 implements Shape {
    // `implements` 키워드를 사용하여 해당 클래스가 Shape  interface 의 조건을 충족하겠다는 것을 명시합니다.


    constructor(public radius: number) {
        this.radius = radius;
    }

    //너비를 가져오는 함수를 구현
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}

class Rectangle2 implements Shape {
    constructor(private width: number, private height: number) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}
const circle = new Circle2(5);
const rectangle = new Rectangle2(10, 5);

console.log(circle.radius);
//private 이라 recatngle 클래스 내부에만조회가능
// console.log(rectangle.width);

const shapes2: Shape2[] = [new Circle2(5), new Rectangle2(10, 5)];


shapes2.forEach(shape => {
    console.log(shape.getArea());
});