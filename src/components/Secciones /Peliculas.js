import React, { Component } from 'react';
import Card from "../Crad/Card";

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
            .then(data => this.setState({ datos: data.results }, console.log(data.results)))
            .catch(error => console.log(error));
    }

  render() {
    return (
        <React.Fragment>
            <h2 class="alert alert-primary">Popular movies this week</h2>
            <section>
                {this.state.datos.map((pelicula) => (
                    <Card titulo={pelicula.title} />
                ))}
            </section>
        </React.Fragment>
    )
  }
}

export default Peliculas
