import type { NextPage } from "next";
import Image from "next/image";
import logoBw from "../assets/logo-ml-bandw.svg";

const Home: NextPage = () => {
  return (
    <div className="global-login">
      <div className="logo-marketlogic">
        <Image
          src={logoBw}
          alt="marketlogic-logo"
          className="logo-marketlogic-bw"
        />
      </div>
    </div>
  );
};

export default Home;
