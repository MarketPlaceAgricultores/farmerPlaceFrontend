import axios from "axios";
import React, { Fragment, useRef } from "react";
import "./login.css";
import history from '../../history';


export default function Login() {
  const email = useRef();
  const pass = useRef();

  const signIn = async () => {
    let form = new URLSearchParams();
    console.log(email, pass);
    form.append("correo", email.current.value);
    form.append("contrasena", pass.current.value);
    console.log(form);
    const data = await axios.post(
      process.env.REACT_APP_API_URL + "root/login",
      form,
      {
        headers: { Accept: "application/json" },
      }
    );
    console.log(data);
    history.push('/main')
  };

  return (
    <Fragment>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="http://localhost:3000/register">Register</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="http://localhost:3000/">Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="http://localhost:3000/products">Products</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="http://localhost:3000/main">Main</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="principalcontainerLogin">
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
      </div>
    </Fragment>
  );
}
