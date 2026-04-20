import React, { Component } from "react";
import Card from "../../components/Card/Card";

const API = "0b50b82888e5bf5a47ee0f15c8629906";
class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: [],
      cargados: false,
    };
  }

  componentDidMount() {
    const busqueda = this.props.match.params.buscado;
    const mediaType = this.props.match.params.tipo;

    if (mediaType == "pelicula") {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API}&query=${busqueda}`,
      )
        .then((response) => response.json())
        .then((data) => this.setState({ datos: data.results, cargados: true }))
        .catch((error) => console.log(error));
    } else {
      fetch(
        `https://api.themoviedb.org/3/search/tv?api_key=` + API +`&query=${busqueda}`,
      )
        .then((response) => response.json())
        .then((data) => this.setState({ datos: data.results, cargados: true }))
        .catch((error) => console.log(error));
    }
  }

  render() {
    const mediaType = this.props.match.params.tipo;
    return (
      <React.Fragment>
        {this.state.cargados == false ? (
          <h3>Cargando</h3>
        ) : this.state.datos.length == 0 ? (
          <p className="noresult">
            No se encontraron resultados para su busqueda
          </p>
        ) : (
          <React.Fragment>
            <h2 className="alert alert-warning">Resultados</h2>
            <section className="row cards">
              {this.state.datos.map((elemento) => (
                <Card
                  key={elemento.id}
                  titulo={
                    mediaType == "pelicula" ? elemento.title : elemento.name
                  }
                  id={elemento.id}
                  type={mediaType == "pelicula" ? "movie" : "serie"}
                  imagen={`https://image.tmdb.org/t/p/w500${elemento.poster_path}`}
                  descripcion={elemento.overview}
                />
              ))}
            </section>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default Results;
