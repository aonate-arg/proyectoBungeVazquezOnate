import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Card from '../../components/Card/Card';

const API = "b4012469dde0367276c9701f8ecc44fe"
class Results extends Component {
  constructor(props){
    super(props)
    this.state = {
      datos: [], 
      
    }
    
  }

  componentDidMount(){
    const busqueda = this.props.match.params.id
    console.log(busqueda)
    fetch(`https://api.themoviedb.org/3/search/multi?api_key=` + API +`&query=${busqueda}`)
      
            .then(response => response.json())
            .then(data => this.setState({ datos: data.results }))
            .catch(error => console.log(error));
     
    }

  render() {
    return (
      <React.Fragment>
        <Header/>
        {this.state.datos.map((pelicula,idx)=> (
                        <Card 
                            key= {pelicula+idx}
                            titulo={this.state.datos.media_type=="movie"?pelicula.name: pelicula.title}
                            id={pelicula.id}
                            imagen={pelicula.poster_path}
                            descripcion={pelicula.overview} />))}
        <Footer/>
      </React.Fragment>
    )
  }
}

export default Results;