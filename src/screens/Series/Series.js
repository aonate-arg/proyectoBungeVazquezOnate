import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import BuscadorFiltro from '../../components/BuscadorFiltro/BuscadorFiltro'
import Card from '../../components/Card/Card'

const API = "b4012469dde0367276c9701f8ecc44fe"
class Series extends Component {

  constructor(props) {
    super(props)
    this.state = {
      datos: [],
      pag: 1
      
    };
  }
  componentDidMount() {
    fetch('https://api.themoviedb.org/3/discover/tv?api_key=' + API)

      .then(response => response.json())
      .then(data => this.setState({ datos: data.results, backup: data.results },console.log(data)))
      .catch(error => console.log(error));
  }
 
  cargarMas = ()=> {
    let newpag = this.state.pag + 1
    fetch(`https://api.themoviedb.org/3/discover/tv?api_key=` + API + `&page=${newpag}`)
      .then(response => response.json())
      .then(data => this.setState({ datos: this.state.datos.concat(data.results), backup: this.state.datos.concat(data.results), pag: newpag },console.log(data)))
      .catch(error => console.log(error));

  }

    filtrarSeries(Serie){
        const series = this.state.backup.filter((i)=> i.name.toLowerCase().includes(Serie.toLowerCase()))
        this.setState({
          datos: series
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
          <div> <BuscadorFiltro filtrar={(input)=> this.filtrarSeries(input)}/> 
            <section className="row cards" id="series">
            
            {this.state.datos.map((serie) => (
              <Card type="serie"
                titulo={serie.name}
                id={serie.id}
                imagen={serie.poster_path}
                descripcion={serie.overview} />
            ))}
          </section><button onClick={this.cargarMas}>Cargar más</button></div>}
          
      </React.Fragment>
    )
  }
}

export default Series

/*Agregar buscador con filter*/