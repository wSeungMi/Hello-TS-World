// 객체
let user: {
  id?: number;
  name: string;
} = {
  id: 1,
  name: "승미",
};

let dog: {
  name: string;
  color: string;
} = {
  name: "돌돌이",
  color: "brown",
};

// user = {
//   name: "홍길동",
// };

user.id;
dog.name;

let config: {
  readonly apiKey: string;
} = {
  apiKey: "MY API KEY",
};

// JS에서는 객체에 접근해서 값을 바로 변경할 수 있었는데..
// config.apiKey = "hacked";
