import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Busqueda from '../../components/Busqueda/Busqueda';
import Card from '../../components/Card/Card';

const API = "0b50b82888e5bf5a47ee0f15c8629906"
class Results extends Component {
  constructor(props) {
    super(props)
    this.state = {
      datos: [],
      cargados: false
    }
  }

  componentDidMount() {
    const busqueda = this.props.match.params.buscado
    const mediaType = this.props.match.params.tipo

    if (mediaType == "pelicula") {
      fetch(`https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-ES&page=1&api_key=${API}&query=${busqueda}`)
      

        .then(response => response.json())
        .then(data => 
          this.setState({ datos: data.results, cargados: true }))
        .catch(error => console.log(error))
    }

    else {
      fetch(`https://api.themoviedb.org/3/search/tv?api_key=` + API + `&query=${busqueda}`)

        .then(response => response.json())
        .then(data => this.setState({ datos: data.results, cargados: true }))
        .catch(error => console.log(error))
    }
  }

  render() {
    const busqueda = this.props.match.params.buscado
    const mediaType = this.props.match.params.tipo
    return (

      <React.Fragment>
        <Header />
        <Busqueda/>
        {(this.state.cargados == false) ?
          <h3>Cargando</h3> :
          (this.state.datos. length== 0) ?
            <p className="noresult">No se encontraron resultados para su busqueda</p> :
            <React.Fragment>
              <h2 className="alert alert-warning">Resultados</h2>

              <section className="row cards" id="movies">
              {this.state.datos.map((pelicula, idx) => (
                <Card
                  key={pelicula + idx}
                  titulo={mediaType == "pelicula" ? pelicula.title : pelicula.name}
                  id={pelicula.id}
                  imagen={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
                  type={mediaType == "pelicula" ? "movie" : "serie"}
                  descripcion={pelicula.overview} />))}
            </section>
            </React.Fragment>}

        <Footer />
      </React.Fragment>
    )
  }
}

export default Results;

/*si queremos que aparezca el buscador aca tenemos que usar componentDidupdate xq se actualiza la URL que queres buscar*/

