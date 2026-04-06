import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import Busqueda from '../../components/Busqueda/Busqueda'
import Card from '../../components/Crad/Card'

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
    
    
  render() {
    return (
      <React.Fragment>
        <Header/>
        <h2 class="alert alert-warning">Todas las series</h2>
        <Busqueda/>
        <section className="row cards" id="series">
          {this.state.datos.filter((serie, idx) => idx<8).map((serie) => (
            <Card type="serie"
              titulo={serie.name}
              id={serie.id}
              imagen={serie.backdrop_path}
              descripcion={serie.overview} />
            ))}
        </section>
      </React.Fragment>
    )
  }
}

export default Series