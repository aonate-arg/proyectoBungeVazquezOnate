import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Card from "../Card/Card";

const API= "b4012469dde0367276c9701f8ecc44fe"
class Series extends Component {
   constructor(props) {
        super(props)
        this.state = {
            datos: []
        };
    }
    componentDidMount() {
        fetch('https://api.themoviedb.org/3/tv/airing_today?api_key=' + API)
            .then(response => response.json())
            .then(data => this.setState({ datos: data.results }))
            .catch(error => console.log(error));
    }
  render() {
    return (
            <React.Fragment>
                <h2 className="alert alert-primary">Series now playing</h2>
                {this.state.datos.length === 0?
                <h3>Cargando...</h3>:
                <section class="row cards" id="on-air-today">
                    {this.state.datos.filter((series, idx) => idx<4).map((series) => (
                        <Card type="serie"
                            titulo={series.name}
                            id={series.id}
                            imagen={series.poster_path}
                            descripcion={series.overview} />

                    ))}<Link to="/Series">Ver todas las series</Link>
                </section>}
            </React.Fragment>
        )
    }
    
  }
/*Para diferenciar entre pelicula y serie en cada card que corresponde le agrego el tipo*/

export default Series
