import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import Busqueda from '../../components/Busqueda/Busqueda'
import Card from '../../components/Card/Card'

const API = "b4012469dde0367276c9701f8ecc44fe"
class Series extends Component {

  constructor(props) {
    super(props)
    this.state = {
      datos: []
    };
  }
  componentDidMount() {
    fetch('https://api.themoviedb.org/3/discover/tv?api_key=' + API)

      .then(response => response.json())
      .then(data => this.setState({ datos: data.results }))
      .catch(error => console.log(error));
  }
  guardarCambios(event) {
    this.setState({ serieBuscada: event.target.value })
  }

  filtrarSeries(event) {
    event.preventDefault()
    this.setState({
      datos: this.state.datos.filter((serie) => {
        return serie.name == this.state.serieBuscada
      })
    })
  }
  /*comparar cada letra del titulo que buscas. También hace que si no coincide ninguno mostrar otro mensaje, no el cargando/ esto tendria que ser un componente?*/

  render() {
    return (
      <React.Fragment>
        <Header />
        <h2 class="alert alert-warning">Todas las series</h2>

        {this.state.datos.length === 0 ?
          <h3>Cargando...</h3> :
          <div><form onSubmit={(event) => this.filtrarSeries(event)} class="search-form"  method="get">
              <input type="text" onChange={(event) => this.guardarCambios(event)} value={this.state.serieBuscada}></input>
              <button type="submit" class="btn btn-success btn-sm">Buscar</button>
            </form>
            <section className="row cards" id="series">
            
            {this.state.datos.filter((serie, idx) => idx < 8).map((serie) => (
              <Card type="serie"
                titulo={serie.name}
                id={serie.id}
                imagen={serie.poster_path}
                descripcion={serie.overview} />
            ))}
          </section></div>}
          
      </React.Fragment>
    )
  }
}

export default Series

/*Agregar buscador con filter*/