import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Busqueda extends Component {
    constructor(props){
        super(props);
        this.state = {valor: ''}
    }

    ejecutarBusqueda(e){
        e.preventDefault();
        this.props.history.push("/Results" + pelicula)
    }

    controlarCambios(e){
        this.setState({valor: e.target.value})
    }

  render() {
    return (
      <form onSubmit={(event)=>this.ejecutarBusqueda(event)}>
        <label>Ingresar Busqueda</label>
      </form>
    )
  }
}

export default withRouter(Busqueda)