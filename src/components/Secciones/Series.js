import React, { Component } from 'react'
import Card from "../Crad/Card";

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
                <section class="row cards" id="on-air-today">
                    {this.state.datos.filter((series, idx) => idx<4).map((series) => (
                        <Card
                            titulo={series.title}
                            id={series.id}
                            imagen={series.backdrop_path}
                            descripcion={series.overview} />

                    ))}
                </section>
            </React.Fragment>
        )
    }
    
  }


export default Series
