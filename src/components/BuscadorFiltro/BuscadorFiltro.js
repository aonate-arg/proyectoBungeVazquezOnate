import {useState, useEffect } from "react";

function BuscadorFiltro(props){
  const [buscado, setBuscado] = useState([]);
  
  function evitarSubmit(event) {
    event.preventDefault();
  }

  function guardarCambios(event) {
    setBuscado(event.target.value);
    props.filtrar(props.buscado);
  }

    return (
      <form
        onSubmit={(event) => evitarSubmit(event)}
        className="buscadorFilter"
      >
        <input
          type="text"
          placeholder="Buscar..."
          onChange={(event)=> guardarCambios(event)}
          value={props.buscado}
        />
      </form>
    )
  }


export default BuscadorFiltro;
