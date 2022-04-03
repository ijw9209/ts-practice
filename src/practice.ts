function sum(x: number, y: number): number {
    return x + y;
}
sum(1, 2);


function sumArray(numbers: number[]) {
    return numbers.reduce((acc, crurent) => acc + crurent, 0);
}

const total = sumArray([1, 2, 3, 4, 5]);

//함수에서 아무것도 반환하지 않는다면 void
function returnNothing(): void {
    console.log('I am just saying hello world');
}