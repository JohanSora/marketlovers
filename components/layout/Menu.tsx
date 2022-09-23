import React from "react";

const Menu = ({ menuState }: any) => {
  return (
    <div className={`menu ${menuState}`}>
      {menuState === "appear-menu" && (
        <div className="container-elements-menu">
          <p>hola</p>
          <p>hola</p>
          <p>hola</p>
          <p>hola</p>
          <p>hola</p>
          <p>hola</p>
          <p>hola</p>
          <p>hola</p>
          <p>hola</p>
          <p>hola</p>
          <p>hola</p>
          <p>hola</p>
          <p>hola</p>
          <p>hola</p>
          <p>hola</p>
          <p>hola</p>
        </div>
      )}
    </div>
  );
};

export default Menu;
