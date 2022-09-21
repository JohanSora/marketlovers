import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { SyntheticEvent, useState } from "react";
import logobw from "../assets/logo-ml-bandw.svg";

const Home: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const AppearForm: any = () => {
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  };

  const FormSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    console.log(e);

    const formdata = new FormData();

    formdata.append("Email", email);
    formdata.append("Contraseña", password);

    router.push("/home");
  };

  AppearForm();

  return (
    <div className="global-login">
      <div className="logo-marketlogic">
        <Image
          src={logobw}
          alt="marketlogic-logo"
          className="logo-marketlogic-bw"
        />
      </div>
      {loading === true && (
        <div className="form-login-screen">
          <div className="form-login">
            <p>
              ¡Bienvenidos, <strong>MarketLovers!</strong>
            </p>
            <form onSubmit={FormSubmit}>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Correo electrónico"
              />
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Ingresar</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
