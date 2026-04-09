import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class Busqueda extends Component {
    constructor(props){
        super(props);
        this.state = {valor: ''}
    }

    evitarBusqueda(e){
        e.preventDefault();
    }

    controlarCambios(e){
        this.setState({
          valor: e.target.value
        },      
        ()=>console.log(this.state.valor),        
    )}

    componentDidUpdate(){
      let valorBusqueda = this.state.valor;
      let valor = JSON.stringify(valorBusqueda)
      localStorage.setItem("Search", valor)
    }

  render() {
    return (
      <form onSubmit={(event)=>this.evitarBusqueda(event)} class="search-form"  method="get">
        <input type="text" onChange={(event)=>this.controlarCambios(event)} value={this.state.valor} name="searchData" placeholder="Buscar..."/>
        <Link to='/Results' class="btn btn-success btn-sm"> <button type="submit" class="btn btn-success btn-sm">Buscar</button> </Link> 
      </form>
    )
  }
}

export default withRouter(Busqueda)