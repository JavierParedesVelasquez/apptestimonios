import React from "react";
import "../style/Testimonios.css";
function Testimonios(props) {
  return (
    <div className="contenedor-testimonio">
      {/* ALT + 96 = `` */}
      <img
        className="imagen-testimonio"
        src={require(`../imagenes/testimonios-${props.imagen}.png`)}
        alt="Fotos de Testimonios"
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className="cargo-testimonio">
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className="text-testimonio">"{props.testimonio}"</p>
      </div>
    </div>
  );
}

export default Testimonios;
