import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();
function Card(props) {
  const [estadoFavoritos, setEstadoFavoritos]= useState(false);
  const [valor, setValor]= useState(["🩶"]);
  const [verMas, setVerMas]= useState(true);
  const [logi, setLogi]= useState(false);
  
  useEffect(()=>{
    let tipo = props.type;
    let storage = localStorage.getItem(tipo);
    let storageJson = JSON.parse(storage);

    if (storageJson !== null) {
      let esFavorito =
        storageJson.filter((id) => id === props.id).length > 0;
      if (esFavorito) {
        setEstadoFavoritos(true);
        setValor("♥️")
     
      }}
    verificar();

  }, []);

 
   
  function verificar() {
    let logeado = cookies.get("userEmail");
    if (logeado != null) {
      setLogi(true);
    } else {
      setLogi(false);
    }

  }

 function agregarfav(id, tipo) {
    let storage = localStorage.getItem(tipo);
    let storageJson = JSON.parse(storage);
    if (storageJson == null) {
      let primerValor = [id];
      let primerString = JSON.stringify(primerValor);
      localStorage.setItem(tipo, primerString);
    } else {
      storageJson.push(id);
      let storageString = JSON.stringify(storageJson);
      localStorage.setItem(tipo, storageString);
    }
    setEstadoFavoritos(true);
    setValor("♥️");
  }

  function Eliminar(id, tipo) {
    let listFav = localStorage.getItem(tipo);
    let listFavJson = JSON.parse(listFav);
    let nuevaListFav = listFavJson.filter((i) => i !== id);
    let newListFavJson = JSON.stringify(nuevaListFav);
    localStorage.setItem(tipo, newListFavJson);
    setValor("🩶");
    setEstadoFavoritos(false);

  function MostrarMas() {
    setVerMas(true);
   
  }

  function MostrarMenos() {
    setVerMas(false);
  }


    return (
      <article className="single-card-movie">
        <h5 className="card-title">{props.titulo}</h5>
        <img
          src={"https://image.tmdb.org/t/p/original/" + props.imagen}
          className="card-img-top"
          alt="..."
        />
        <div className="cardBody">
          <button
            onClick={() =>
              verMas ? this.MostrarMenos() : this.MostrarMas()
            }
          >
            {verMas == true
              ? "Mostrar descripción"
              : "Ocultar descripción"}
          </button>
          <p
            className={verMas ? "card-text-hide" : "card-text-show"}
          >
            {props.descripcion}
          </p>
          <Link
            to={
              props.type == "movie"
                ? `/DetallePeliculas/${props.id}`
                : `/DetalleSeries/${props.id}`
            }
            className="btn btn-primary"
          >
            Ver más
          </Link>
          <button
            onClick={() =>
              this.state.estadoFavoritos == false
                ? this.agregarfav(props.id, props.type)
                : this.Eliminar(props.id, props.type)
            }
            value={props.id}
            className={logi ? "favoritos" : "card-text-hide"}
          >
            {this.state.valor}
          </button>
        </div>
      </article>
    );
  }
}

export default Card;
