import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
const API = "b4012469dde0367276c9701f8ecc44fe"

class Detalle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      datos: []
    };
  }
  componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=' + API)
      .then(response => response.json())
      .then(data => this.setState({ datos: data.results }, console.log(data.results)))
      .catch(error => console.log(error));
  }
  
/*Cambiar URL del fetch y linkear boton*/

  render() {
    return (
      <React.Fragment>
        <Header />
        {this.state.datos.map(pelicula => (
          <div>
            <h2 className="alert alert-primary">{pelicula.title}</h2>
            <section class="row">
              <img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} className="card-img-top" alt={pelicula.title} />
              <section className="col-md-6 info">
                <h3>Descripción</h3>
                <p className="description">{pelicula.overview}</p>
                <p className="mt-0 mb-0" id="release-date"><strong>Fecha de estreno:</strong> {pelicula.release_date}</p>
                <p className="mt-0 mb-0 length"><strong>Duración:</strong> 130</p>
                <p className="mt-0" id="votes"><strong>Puntuación:</strong> {pelicula.vote_average}</p>
              </section>
            </section>
          </div>
        ))}
        <Footer />
      </React.Fragment>
    )
  }
}

export default Detalle;