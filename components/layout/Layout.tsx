import type { AppProps } from "next/app";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <div className="contain-global">
        <div className="menu"></div>
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
