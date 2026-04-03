import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
const API = "b4012469dde0367276c9701f8ecc44fe"

/*corregir el código, ver en que parte se usa match params y verificar URL*/

class Detalle extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      datos: [],
      id: this.props.match.params.id
    };
  }
  componentDidMount() {

    fetch(`https://api.themoviedb.org/3/keyword/${this.state.id}/movies?api_key=`+API)
      .then(response => response.json())
      .then(data => this.setState({datos: data}))
      .catch(error => console.log(error));
      
      
      

  }
  render(){
    return (
      <React.Fragment>
        <Header />
        {
          <div>
            <h2 className="alert alert-primary">{this.state.title}</h2>
            <section className="row">
              <img src={`https://image.tmdb.org/t/p/w500${this.state.poster_path}`} className="card-img-top" alt={this.state.title} />
              <section className="col-md-6 info">
                <h3>Descripción</h3>
                <p className="description">{this.state.overview}</p>
                <p className="mt-0 mb-0" id="release-date"><strong>Fecha de estreno:</strong> {this.state.release_date}</p>
                <p className="mt-0 mb-0 length"><strong>Duración:</strong> 130</p>
                <p className="mt-0" id="votes"><strong>Puntuación:</strong> {this.state.vote_average}</p>
              </section>
            </section>
          </div>
          }
        
        <Footer />
      </React.Fragment>
    )
}}
export default Detalle;