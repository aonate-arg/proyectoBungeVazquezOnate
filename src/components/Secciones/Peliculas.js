import React, { Component } from 'react';
import Card from "../Card/Card";

const API = "b4012469dde0367276c9701f8ecc44fe"
class Peliculas extends Component {
    constructor(props) {
        super(props)
        this.state = {
            datos: []
        };
    }
    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=' + API)

            .then(response => response.json())
            .then(data => this.setState({ datos: data.results }))
            .catch(error => console.log(error));
    }

    /*Agregar cargando y ver si esta bien primero filter y despues map*/
    render() {
        return (
            <React.Fragment>
                <h2 className="alert alert-primary">Popular movies this week</h2>
                <section className="row cards" id="movies">
                    {this.state.datos.filter((pelicula, idx) => idx<4).map((pelicula) => (
                        <Card type= "movie"
                            titulo={pelicula.title}
                            id={pelicula.id}
                            imagen={pelicula.backdrop_path}
                            descripcion={pelicula.overview} />

                    ))}
                </section>
            </React.Fragment>
        )
    }
}


export default Peliculas

/*{this.state.datos.map((pelicula, idx) => (
                        <Card
                            titulo={pelicula.title}
                            key={pelicula+idx}
                            id={pelicula.id}
                            imagen={pelicula.backdrop_path}
                            descripcion={pelicula.overview} />

                    ))}*/
