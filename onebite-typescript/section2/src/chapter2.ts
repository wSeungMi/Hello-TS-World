// 배열
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "I'm", "Seungmi"];

let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];

// 길이를 넘는 배열 할당 X
// tup1 = [1, 2, 3];
// 타입이 일치하지 않는 배열 할당 X
// tup1 = ["1", "2"];

let tup2: [number, string, boolean] = [1, "2", true];

// tup2 = [1];
// tup2 = ["하이", 1, 0];
tup2 = [3, "테스트", true];

const users: [string, number][] = [
  ["아무개", 1],
  ["강무개", 2],
  ["박무개", 3],
  ["김무개", 4],
];
