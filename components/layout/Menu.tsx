import React from "react";
import Menuoption from "./Menuoption";

const Menu = ({ menuState }: any) => {
  return (
    <div className={`menu ${menuState}`}>
      {menuState === "appear-menu" && (
        <div className="container-elements-menu">
          <Menuoption />
        </div>
      )}
    </div>
  );
};

export default Menu;
