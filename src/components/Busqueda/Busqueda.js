import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class Busqueda extends Component {
    constructor(props){
        super(props);
        this.state = {valor: ''}
    }

    evitarBusqueda(e){
        e.preventDefault();
        this.props.history.push('/Results/' + this.state.valor)
    }

    controlarCambios(e){
        this.setState({
          valor: e.target.value
        },      
        ()=>console.log(this.state.valor),        
    )}

  render() {
    return (
      <form onSubmit={(event)=>this.evitarBusqueda(event)} class="search-form"  method="get">
        <input type="text" onChange={(event)=>this.controlarCambios(event)} value={this.state.valor} name="searchData" placeholder="Buscar..."/>
        <button type="submit" class="btn btn-success btn-sm">Buscar</button> 
      </form>
    )
  }
}

export default withRouter(Busqueda)