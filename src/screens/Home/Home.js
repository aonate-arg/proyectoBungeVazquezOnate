import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Card from '../../components/Crad/Card';
const API = "b4012469dde0367276c9701f8ecc44fe"

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            datos: []
        };
    }
    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=' + API)
            .then(response => response.json())
            .then(data => this.setState({ datos: data.results }, console.log(data.results)))
            .catch(error => console.log(error));
    }
/* 
AVISO AVISO AVISO AVISO AVISO
la etiqueta de article agarra toda la estructura de como deberia quedar card. 
Quiere decir que cuandoe este card esa etiqueta article la reemplazamos por la 
la seccion peliculas y series. Donde van a estar ya cardagas todas las cards.
*/
    render() {
        return (
            <React.Fragment>
                <Header />
                <Card/>
                <article className="single-card-movie">
                    {this.state.datos.map(pelicula => (
                        <div className="cardBody">
                            <img src= {`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} className="card-img-top" alt={pelicula.title} />
                            <div className="cardBody">
                                <h5 className="card-title">{pelicula.title}</h5>
                                <p className="card-text">{pelicula.overview}</p>
                                <a href="movie.html" className="btn btn-primary">Ver más</a>
                                <a href="" className="btn alert-primary">🩶</a>
                            </div>
                        </div>
                    ))}
                </article>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Home;