// const data = {
//   name: "승미식당",
//   category: "western",
//   address: {
//     city: "seoul",
//     detail: "somewhere",
//     zipCode: 12435,
//   },
//   menu: [
//     {
//       name: "oil pasta",
//       price: 5000,
//       category: "PASTA",
//     },
//     {
//       name: "garlic steak",
//       price: 35000,
//       category: "STEAK",
//     },
//   ],
// };

export type Restaurant = {
  name: string;
  category: string;
  address: Address;
  menu: Menu[];
};

export type Address = {
  city: string;
  detail: string;
  zipCode: number;
};

export type Menu = {
  name: string;
  price: number;
  category: string;
};

// 원하는 타입 제외하고 만들기
export type AddressWithoutZipCode = Omit<Address, "zipCode">;

// 원하는 타입만 선택해서 가져오기
export type RestaurantOnlyCategory = Pick<Restaurant, "category">;

// api 통신
export type ApiResponse<T> = {
  data: T[];
  totalPage: number;
  page: number;
};

export type ResturantResponse = ApiResponse<Restaurant>;
export type MenuResponse = ApiResponse<Menu>;
