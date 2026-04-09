import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import Footer from "../../components/Footer/Footer"
import Card from "../../components/Card/Card"
import Peliculas from '../Peliculas/Peliculas'
import Series from '../Series/Series'

const API = "b4012469dde0367276c9701f8ecc44fe"
class Favoritos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      datos: [], id: []
    }
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/movie/${this.state.id.map()}?api_key=`+API)
      .then(response => response.json())
      .then(data => this.setState({datos: data}))
      .catch(error => console.log(error));
  /*Agregar cargando antes de que lleguen los datos del fetch*/    
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <h2 className="alert alert-primary">Favoritos</h2>
        <section className="row cards" id="movies">
          {this.state.datos.map((pelicula) => (
            <Card
              titulo={pelicula.title}
              id={pelicula.id}
              imagen={pelicula.backdrop_path}
              descripcion={pelicula.overview} />

          ))}
        </section>
        <Footer />
      </React.Fragment>
    )
  }
}

export default Favoritos;