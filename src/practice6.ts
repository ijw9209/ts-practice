//Type Alias 사용
//type은 특정 타입에 별칭을 붙이는 용도로 사용, 이를 이용하여 객체를 위한 타입을 
// 설정할 수도 있고, 배열 또는 그 어떤 타입이던 별칭을 지어줄 수 있다.

type Person3 = {
    name: string;
    age?: number; // 물음표가 들어갔다는 것은, 설정을 해도 되고 안해도 되는 값이라는 것을 의미합니다.
}

// &는 Intersection 으로 두개 이상의 타입을 합쳐줌
//  참고: https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types
type Developer3 = Person3 & {
    skills: string[];
}

const person3: Person3 = {
    name: '김사람'
}

const expert3: Developer3 = {
    name: '김개발',
    skills: ['javascirpt', 'react']
}

type People = Person3[]; // Person[] 를 이제 앞으로 People 이라는 타입으로 사용 할 수 있습니다.
const people3: People = [person3, expert3];

type Color = 'red' | 'orange' | 'yellow';
const color: Color = 'red';
const colors: Color[] = ['red', 'orange'];