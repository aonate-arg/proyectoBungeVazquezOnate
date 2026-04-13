import React, { Component } from 'react'
import Card from '../Card/Card'

const API = "b4012469dde0367276c9701f8ecc44fe"
class FavSeries extends Component {
  constructor() {
    super()
    this.state = {
      tdslosdatos: [],
    }
  }

  agregarDatos(data) {
    let nuevoArray = this.state.tdslosdatos
    nuevoArray.push(data)
    this.setState({ tdslosdatos: nuevoArray })
  }
  componentDidMount() {
    let listFav = localStorage.getItem("serie")
    console.log(listFav);
    let listFavJson = JSON.parse(listFav)
    listFavJson.map((i) =>
      fetch(`https://api.themoviedb.org/3/tv/${i}?api_key=` + API)
        .then(response => response.json())
        .then(data => this.agregarDatos(data))
        .catch(error => console.log(error))
    )
  }

  render() {
    return (
      <React.Fragment>
        <h2 className="alert alert-primary">Series Favoritas</h2>
        <div>
          <section className="row cards" id="serie">
            {this.state.tdslosdatos.map((series) => (
              <Card type="movie"
                titulo={series.title}
                id={series.id}
                imagen={series.poster_path}
                descripcion={series.overview}
              />
            ))}
          </section>
        </div>
      </React.Fragment>
    )
  }
}


export default FavSeries