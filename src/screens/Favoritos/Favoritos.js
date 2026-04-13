import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import Footer from "../../components/Footer/Footer"
import FavMovies from '../../components/Favoritos/FavMovies'
import FavSeries from '../../components/Favoritos/FavSeries'

class Favoritos extends Component {
  constructor() {
    super()
    this.state = {
      tdslosdatos: [],
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <FavMovies/>
        <FavSeries/>
        <Footer />
      </React.Fragment>
    )
  }
}

export default Favoritos;

/*Ver si esta bien hecho, se me ocurrió crear el método agregarDatos para ir 
actualizando el array del estado, y usarlo en el then de cd iteración del map*/
/*Falta hacer una sección para series y otra para peliculas, usar el atributo type*/