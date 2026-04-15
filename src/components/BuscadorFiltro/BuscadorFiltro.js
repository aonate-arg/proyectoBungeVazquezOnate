import React, {Component} from 'react'

class BuscadorFiltro extends Component{
    constructor(props){
        super(props)
        this.state={
            valor: []
        }
    }
    evitarSubmit(event){
        event.preventDefault();

    }

    guardarCambios(event){
        this.setState({
            valor: event.target.value
        }, () => this.props.filtrar(this.state.valor))

    }

    render(){
        return(
            <form onSubmit={(event)=>this.evitarSubmit(event)} class="search-form" >
                    <input type="text" onChange={(event)=>this.guardarCambios(event)} value={this.state.valor}></input>
                    <button type="submit" className="btn btn-success btn-sm">Buscar</button>
            </form>
        )
    }
}

export default BuscadorFiltro