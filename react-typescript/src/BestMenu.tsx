import React from "react";
import { Menu } from "./model/resturant";

interface OwnProps extends Omit<Menu, "price"> {
  showBestMenuName(name: string): string;
}

const BestMenu: React.FC<OwnProps> = ({ name, category }) => {
  return (
    <div>
      {name} {category}
    </div>
  );
};

export default BestMenu;
