import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import Busqueda from '../../components/Busqueda/Busqueda'
import Card from '../../components/Card/Card'

const API = "b4012469dde0367276c9701f8ecc44fe"
class Peliculas extends Component {

  constructor(props) {
    super(props)
    this.state = {
      datos: []
    };
  }
  componentDidMount() {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=' + API)

      .then(response => response.json())
      .then(data => this.setState({ datos: data.results },     console.log(data)))
      .catch(error => console.log(error));
  }
  guardarCambios(event){
        this.setState({peliBuscada: event.target.value})
    }

    filtrarPeliculas(event){
        event.preventDefault()
        this.setState({datos: this.state.datos.filter((pelicula) => {
        return pelicula.title == this.state.peliBuscada}) 
        })
    }
    /*comparar cada letra del titulo que buscas. También hace que si no coincide ninguno mostrar otro mensaje, no el cargando/ esto tendria que ser un componente?*/
    
  render() {
    return (
      <React.Fragment>
        <Header />
        <h2 className="alert alert-primary">Todas las películas</h2>

        {this.state.datos.length === 0 ?
          <h3>Cargando...</h3> :
          <div>
              <form onSubmit={(event)=>this.filtrarPeliculas(event)} class="search-form"  method="get">
                    <input type="text" onChange={(event)=>this.guardarCambios(event)} value={this.state.peliBuscada}></input>
                    <button type="submit" class="btn btn-success btn-sm">Buscar</button>
                </form>
            <section className="row cards" id="movies">
              {this.state.datos.filter((pelicula, idx) => idx < 8).map((pelicula) => (
                <Card type="movie"
                  titulo={pelicula.title}
                  id={pelicula.id}
                  imagen={pelicula.poster_path}
                  descripcion={pelicula.overview} />
              ))}
            </section>
          </div>}

      </React.Fragment>
    )
  }
}

export default Peliculas

/*Agregar buscador con filter*/
/*agregar boton entre div y section(<button className="btn btn-info">Cargar más</button>)*/