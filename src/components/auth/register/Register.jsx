import axios from "axios";
import React, { Fragment, useRef } from "react";
import "./register.css";

export default function Register() {
  const name = useRef();
  const email = useRef();
  const pass = useRef();

  const signIn = async () => {
    let form = new URLSearchParams();
    form.append("nombre", name.current.value);
    form.append("correo", email.current.value);
    form.append("contrasena", pass.current.value);
    console.log(form);
    const data = await axios.post(
      process.env.REACT_APP_API_URL + "root/crear",
      form
    );
    console.log(data);
  };

  return (
    <Fragment>
     <div className="principalcontainerRegister">
      <div className="container">
        <div className="content">
          <h3>Registrate</h3>
          <div className="form-group">
            <label>Nombre</label>
            <input
              type="text"
              id="name"
              ref={name}
              className="form-control"
              placeholder="Digite su nombre"
            />
          </div>
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
      </div>
    </Fragment>
  );
}
