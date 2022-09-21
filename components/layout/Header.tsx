import Image from "next/image";
import React, { useState } from "react";
import logo from "../../assets/logoHeader.webp";

const Header = () => {
  const [menu, setMenu] = useState("");

  return (
    <header>
      <div className="container-menu-logo">
        <div
          id="nav-icon1"
          onClick={() => (menu === "" ? setMenu("open") : setMenu(""))}
          className={menu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="container-logo-up">
          <Image
            src={logo}
            alt={"logo-marketlogic"}
            className="logo-marketlogic-img"
          />
        </div>
      </div>

      <p>Home</p>
      <div className="user-space">
        {/* imagen */}
        <Image src={""} alt="imagen-usuario" />
      </div>
    </header>
  );
};

export default Header;
