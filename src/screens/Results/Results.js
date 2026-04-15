import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Busqueda from '../../components/Busqueda/Busqueda';
import Card from '../../components/Card/Card';

const API = "b4012469dde0367276c9701f8ecc44fe"
class Results extends Component {
  constructor(props) {
    super(props)
    this.state = {
      datos: [],
    }
  }

  componentDidMount() {
    const busqueda = this.props.match.params.buscado
    const mediaType = this.props.match.params.tipo

    if (mediaType == "pelicula") {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API}&query=${busqueda}`)

        .then(response => response.json())
        .then(data => this.setState({ datos: data.results }))
        .catch(error => console.log(error))
    }

    else {
      fetch(`https://api.themoviedb.org/3/search/tv?api_key=` + API + `&query=${busqueda}`)

        .then(response => response.json())
        .then(data => this.setState({ datos: data.results }))
        .catch(error => console.log(error))
    }
  }

  render() {
    const busqueda = this.props.match.params.buscado
    const mediaType = this.props.match.params.tipo
    return (

      <React.Fragment>
        <Header />
        <Busqueda />

        <h2 className="alert alert-warning">Resultados</h2>
        {this.state.datos.map((pelicula, idx) => (
          <Card
            key={pelicula + idx}
            titulo={mediaType == "pelicula" ? pelicula.title : pelicula.name}
            id={pelicula.id}
            imagen={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
            type={mediaType == "pelicula" ? "movie" : "serie"
            }

            descripcion={pelicula.overview} />))}

        <Footer />
      </React.Fragment>
    )
  }
}

export default Results;

