import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import Footer from "../../components/Footer/Footer"
import Card from "../../components/Card/Card"
import Peliculas from '../Peliculas/Peliculas'
import Series from '../Series/Series'

const API = "b4012469dde0367276c9701f8ecc44fe"
class Favoritos extends Component {
  constructor() {
    super()
    this.state = {
      tdslosdatos: [],
    }
  }

  agregarDatos(data){
      let nuevoArray= this.state.tdslosdatos
      nuevoArray.push(data)
      this.setState({tdslosdatos: nuevoArray})
  }
  componentDidMount() {
    let listFav = localStorage.getItem("Fav")
    console.log(listFav);
      let listFavJson = JSON.parse(listFav)
      listFavJson.map((i) =>
        fetch(`https://api.themoviedb.org/3/movie/${i}?api_key=` + API)
          .then(response => response.json())
          .then(data => this.agregarDatos(data))
          .catch(error => console.log(error))
      ) 
  }


  render() {
    return (
      <React.Fragment>
                
                <h2 className="alert alert-primary">Popular movies this week</h2>
               
                <div>
                
                <section className="row cards" id="movies">
                   
                   {this.state.tdslosdatos.map((pelicula) => (
                        <Card type= "movie"
                            titulo={pelicula.title}
                            id={pelicula.id}
                            imagen={pelicula.poster_path}
                            descripcion={pelicula.overview} />

                    ))}
                </section></div>
            </React.Fragment>
    )
  }
}

export default Favoritos;

/*Ver si esta bien hecho, se me ocurrió crear el método agregarDatos para ir 
actualizando el array del estado, y usarlo en el then de cd iteración del map*/
/*Falta hacer una sección para series y otra para peliculas, usar el atributo type*/