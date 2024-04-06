// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  ADMIN,
  USER = 10,
  GUEST,
}

const user1 = {
  name: "김관리",
  role: Role.ADMIN, // 0 <- 관리자
};

const user2 = {
  name: "박유저",
  role: Role.USER, // 1 <- 일반 유저
};

const user3 = {
  name: "조게트",
  role: Role.GUEST, // 2 <- 게스트
};

console.log(user1, user2, user3);
