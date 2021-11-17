import axios from "axios";
import React, { Fragment, useRef } from "react";
import "./login.css";

export default function Login() {
  const email = useRef();
  const pass = useRef();

  const signIn = async () => {
    let form = new URLSearchParams();
    console.log(email, pass);
    form.append("email", email.current.value);
    form.append("password", pass.current.value);
    console.log(form);
    const data = await axios.post(
      process.env.REACT_APP_API_URL + "auth/login",
      form,
      {
        headers: { Accept: "application/json" },
      }
    );
    console.log(data);
  };

  return (
    <Fragment>
        <div className="container">
            <div className="content">
            <h3>Bienvenido</h3>
      <div className="form-group">
        <label>Correo electrónico</label>
        <input
          type="email"
          id="email"
          ref={email}
          className="form-control"
          placeholder="Digite su correo electronico"
        />
      </div>
      <div className="form-group">
        <label>Contraseña</label>
        <input
          type="password"
          id="pass"
          ref={pass}
          className="form-control"
          placeholder="Digite su contraseña"
        />
      </div>
      <button
        type="submit"
        onClick={signIn}
        className="btn btn-primary btn-block"
      >
        Enviar
      </button>{" "}
            </div>
      
      </div>
    </Fragment>
  );
}
