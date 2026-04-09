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
      datos: [], 
      info: [],

    }
  }

  componentDidMount() {
    let listFav = localStorage.getItem("Fav")
    console.log(listFav);
    
    
    if (listFav !== null) {
      let listFavJson = JSON.parse(listFav)
      listFavJson.map((i) =>
        fetch(`https://api.themoviedb.org/3/movie/${i}?api_key=` + API)
          .then(response => response.json())
          .then(data => this.setState({ datos: this.state.info.push(data)}, console.log(this.state.datos))
          .catch(error => console.log(error))
      )
      )}
    /*Agregar cargando antes de que lleguen los datos del fetch*/
  }

  render() {
    return (
      <React.Fragment>
                
                <h2 className="alert alert-primary">Popular movies this week</h2>
                {this.state.datos.length === 0?
                <h3>Cargando...</h3>:
                <div>
                
                <section className="row cards" id="movies">
                   
                   {this.state.info.map((pelicula) => (
                        <Card type= "movie"
                            titulo={pelicula.title}
                            id={pelicula.id}
                            imagen={pelicula.poster_path}
                            descripcion={pelicula.overview} />

                    ))}
                </section></div>}
            </React.Fragment>
    )
  }
}

export default Favoritos;

