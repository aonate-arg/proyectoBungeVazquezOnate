import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
const API = "b4012469dde0367276c9701f8ecc44fe"

class DetalleSeries extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      datos: [],
      
    };
  }
  componentDidMount() {
    const ID= this.props.match.params.id
    fetch(`https://api.themoviedb.org/3/tv/${ID}?api_key=`+API)

      .then(response => response.json())
      .then(data => this.setState({datos: data}))
      .catch(error => console.log(error));
      
  /*Agregar cargando antes de que lleguen los datos del fetch*/    
      

  }
  render(){
    return (
      <React.Fragment>
        <Header />

        {this.state.datos.length === 0?
        <h3>Cargando...</h3>:
          <div>
            <h2 className="alert alert-primary">{this.state.datos.original_name}</h2>
            <section className="row">
              <img src={`https://image.tmdb.org/t/p/w500${this.state.datos.poster_path}`} class="col-md-6" alt={this.state.datos.title} />
              <section className="col-md-6 info">
                <h3>Descripción</h3>
                <p className="description">{this.state.datos.overview}</p>
                <p className="mt-0 mb-0" id="release-date"><strong>Fecha de estreno:</strong> {this.state.datos.first_air_date}</p>
                <p className="mt-0 mb-0 length"><strong>Duración:</strong> {this.state.datos.episode_run_time} minutos </p>
                <p className="mt-0" id="votes"><strong>Puntuación:</strong> {this.state.datos.vote_average}</p>
                <ul className="mt-0 mb-0 length"><strong>Géneros:</strong> {this.state.datos.genres.map((genero,idx)=>
                <li key={idx}> {genero.name}</li>)}</ul>
              </section>
            </section>
          </div>
          }
        
        <Footer />
      </React.Fragment>
    )
}}
export default DetalleSeries;
  