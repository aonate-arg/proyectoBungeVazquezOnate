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
            <form onSubmit={(event)=>this.evitarSubmit(event)} className="buscadorFilter" >
                    <input type="text" placeholder='Buscar...' onChange={(event)=>this.guardarCambios(event)} value={this.state.valor}/>
                    
            </form>
        )
    }
}

export default BuscadorFiltro