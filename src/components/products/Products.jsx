import axios from "axios";
import React, { Fragment, useRef } from "react";
import "./products.css";

export default function Products() {
  const name          = useRef();
  const descripcion   = useRef();
  const unidadMedida  = useRef();
  const precioXunidad = useRef();
  const urlImagen     = useRef();

  const signIn = async () => {
    let form = new URLSearchParams();
    form.append("nombre", name.current.value);
    form.append("descripcion", descripcion.current.value);
    form.append("unidadMedida", unidadMedida.current.value);
    form.append("precioXunidad", precioXunidad.current.value);
    form.append("urlImagen", urlImagen.current.value);
    console.log(form);
    const data = await axios.post(
      process.env.REACT_APP_API_URL + "product/crear",
      form
    );
    console.log(data);
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
      <div className="principalcontainerProducts">
      <div className="container">
        <div className="content">
          <h3>Ingresa tu producto</h3>
          <div className="form-group">
            <label>Nombre del producto</label>
            <input
              type="text"
              id="name"
              ref={name}
              className="form-control"
              placeholder="Digite el nombre"
            />
          </div>
          <div className="form-group">
            <label>Descripción</label>
            <input
              type="text"
              id="descripcion"
              ref={descripcion}
              className="form-control"
              placeholder="Digite la descripción"
            />
          </div>
          <div className="form-group">
            <label>Unidad de medida</label>
            <input
              type="text"
              id="unidadMedida"
              ref={unidadMedida}
              className="form-control"
              placeholder="Digite una unidad de medida"
            />
          </div>
          <div className="form-group">
            <label>Precio por unidad</label>
            <input
              type="number"
              id="precioXunidad"
              ref={precioXunidad}
              className="form-control"
              placeholder="Digite el precio por unidad"
            />
          </div>
          <div className="form-group">
            <label>Imagen del producto</label>
            <input
              type="text"
              id="urlImagen"
              ref={urlImagen}
              className="form-control"
              placeholder="Digite la url de la imagen"
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
