import React, { useState } from "react";
import Store from "./Store";
import { Address, Restaurant } from "./model/resturant";
import BestMenu from "./BestMenu";

const data: Restaurant = {
  name: "승미식당",
  category: "western",
  address: {
    city: "seoul",
    detail: "somewhere",
    zipCode: 12435,
  },
  menu: [
    {
      name: "oil pasta",
      price: 5000,
      category: "PASTA",
    },
    {
      name: "garlic steak",
      price: 35000,
      category: "STEAK",
    },
  ],
};

const App: React.FC = () => {
  const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data);
  const changeAddress = (address: Address) => {
    setMyRestaurant({ ...myRestaurant, address: address });
  };
  const showBestMenuName = (name: string) => {
    return name;
  };

  return (
    <>
      <div>
        <Store info={myRestaurant} changeAddress={changeAddress} />
        <BestMenu
          name="후라이드 치킨"
          category="치킨"
          showBestMenuName={showBestMenuName}
        />
      </div>
    </>
  );
};

export default App;
