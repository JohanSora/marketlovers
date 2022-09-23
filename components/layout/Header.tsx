import { NextPage } from "next";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../assets/logoHeader.webp";
import userDefault from "../../assets/userDefault.png";

const Header = ({ menu, setMenu }: any) => {
  return (
    <header>
      <div className="container-menu-logo">
        <div className="container-nav-icon">
          <div
            id="nav-icon1"
            onClick={() => (menu === "" ? setMenu("open") : setMenu(""))}
            className={menu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className="container-logo-up">
          <Image
            src={logo}
            alt={"logo-marketlogic"}
            className="logo-marketlogic-img"
          />
        </div>
      </div>
      <p className="title-ubication">Inicio</p>
      <div className="options">
        <div className="user-space">
          <p>Nombre de usuario</p>
          <Image src={userDefault} alt="imagen-usuaio" width={50} height={50} />
        </div>
      </div>
    </header>
  );
};

export default Header;
