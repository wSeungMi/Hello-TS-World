// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "승미",
  nickname: "seungmi",
  birth: "0000.00.00",
  bio: "안녕하세요",
  location: "서울시",
};

let user2: User = {
  id: 1,
  name: "승미",
  nickname: "seungmi",
  birth: "0000.00.00",
  bio: "안녕하세요",
  location: "서울시",
};

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "KO",
  UnitedState: "US",
  UnitedKingdom: "UK",
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number;
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
};
