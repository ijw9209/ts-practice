# 타입스크립트 설정 및 실행법

터미널에서 다음과 같은 명령어를 입력함

``` 
$ cd ts-practice   #해당디렉터리 이동 후
$ yarn init -y

```


## 타입스크립트 글로벌로 설치

```
$ yarn global add typescript
또는
$ npm install -g typescript

```

설치후 프로젝트 디렉터리 안에서 tsc --init을 입력하면 tsconfig.json 파일이 생성됨

## tsconfig.json

+ target : 컴파일되는 코드의 환경정의 (es5, es6..)
+ module : 컴파일되는 코드가 어떤 모듈 시스템을 사용할 건지 정의 
    - common (export default Sample) -> (exports.default = helloWorld)로 변환
    - es2015 (export default Sample) 유지
+ strict : 모든 타입 체킹 옵션 활성화
+ esModuleInterop : commonjs 모듈 형태로 이루어진 파일을 es2015모듈 형태로 불러올 수 있게 해줌
+ outDir : 컴파일된 파일들이 저장되는 경로 지정


## 실행방법

컴파일방법
코드 작성후 프로젝트 위치에서 tsc 명령어하면 outDir에 정해진 폴더로 컴파일됨

실행방법
node dist/practice

## 연습

/src/practice 


```javascript 

let count = 0;  //숫자
count += 1;
count = '문자열';   // 이러면 에러

const message: string = 'Hello world';  // 문자열
console.log(message);

const done: boolean = true;        //boolean

const numbers: number[] = [1, 2, 3];  // 숫자 배열
const messages: string[] = ['hello', 'world']; //문자열 배열


messages.push(1);   //숫자 넣으려하면 안됨

let mightBeUndefined: string | undefined = undefined;   // string 일수도 , undefined 일수도
let nullableNumber: number | null = null; // number일수도 null 일수도

let color: 'red' | 'orange' | 'yello' = 'red';  //red, orange, yello 중 하나임
color = 'yello';
color = 'green'; // 에러발생


```