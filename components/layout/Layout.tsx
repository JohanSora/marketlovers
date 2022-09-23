import type { AppProps } from "next/app";
import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";

const Layout = ({ children }: any) => {
  const [menu, setMenu] = useState("");

  return (
    <>
      <Header menu={menu} setMenu={setMenu} />
      <div className="contain-global">
        {menu === "open" ? (
          <Menu menuState={"appear-menu"} />
        ) : (
          <Menu menuState={"disappear-menu"} />
        )}
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
