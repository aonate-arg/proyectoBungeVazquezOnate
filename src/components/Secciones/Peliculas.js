import React, { Component } from 'react';
import Card from "../Card/Card";

const API = "b4012469dde0367276c9701f8ecc44fe"
class Peliculas extends Component {
    constructor(props) {
        super(props)
        this.state = {
            datos: [],
            peliBuscada: []
        };
    }
    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=' + API)

            .then(response => response.json())
            .then(data => this.setState({ datos: data.results }))
            .catch(error => console.log(error));
    }

    
    render() {
        return (
            <React.Fragment>
                <h2 className="alert alert-primary">Popular movies this week</h2>
                {this.state.datos.length === 0?
                <h3>Cargando...</h3>:
                <div>
               
                <section className="row cards" id="movies">
               
                   
                   {this.state.datos.filter((pelicula, idx) => idx<4).map((pelicula) => (
                        <Card type= "movie"
                            titulo={pelicula.title}
                            id={pelicula.id}
                            imagen={pelicula.poster_path}
                            descripcion={pelicula.overview} />

                    ))}
                </section></div>}
            </React.Fragment>
        )
    }
}


export default Peliculas
/*el buscador de filter tiene que ser un componente o aca adentro esta bien?*/
/*Agregar cargando y ver si esta bien primero filter y despues map*/
/*{this.state.datos.map((pelicula, idx) => (
                        <Card
                            titulo={pelicula.title}
                            key={pelicula+idx}
                            id={pelicula.id}
                            imagen={pelicula.backdrop_path}
                            descripcion={pelicula.overview} />

                    ))}*/
