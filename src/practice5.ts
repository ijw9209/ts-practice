//일반 객체를 interface로 타입지정
interface Person {
    name: string;
    age?: number;   // 물음표 설정해도되고 안해도 되는값

}

interface Developer extends Person {
    skills: string[];
}

const person2: Person = {
    name: '김사람',
    age: 20
}

const expert2: Developer = {
    name: '김개발',
    skills: ['javascript', 'react']
}

const people: Person[] = [person, expert];
//Person과 Developer 형태가 유사하다면 interface를 선언할때 다른 interface를 extends
//키워드를 사용해 상속 받을수 잇음