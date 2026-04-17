import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class Busqueda extends Component {
  constructor(props) {
    super(props);
    this.state = ({ valor: '', tipo: '' })
  }

  evitarBusqueda(e) {
    e.preventDefault();

    this.props.history.push('/Results/' + this.state.valor + "/" + this.state.tipo)
  }

  controlarCambios(e) {
    this.setState({
      valor: e.target.value
    },
      () => console.log(this.state.valor),
    )
  }

  tipoPelicula(event) {
    this.setState({ tipo: "pelicula" })
  }

  tipoSerie(event) {
    this.setState({ tipo: "serie" })
  }

  render() {
    return (
      <form onSubmit={(event) => this.evitarBusqueda(event)} className="search-form">
        <input type="text" onChange={(event) => this.controlarCambios(event)} value={this.state.valor} name="searchData" placeholder="Buscar..." />
        <button type="submit" class="btn btn-success btn-sm">Buscar</button>
        <div className='radios'>
          <label className='radiolabel'>
            <span>Pelicula</span>
            <input onChange={(event) => this.tipoPelicula(event)} type="radio" name="tipo" value="pelicula"></input>
          </label>
          <label className='radiolabel'>
            <span>Serie</span>
            <input onChange={(event) => this.tipoSerie(event)} type="radio" name="tipo" value="serie" defaultChecked></input>
          </label>
        </div>
      </form>
    )
  }
}

export default withRouter(Busqueda)