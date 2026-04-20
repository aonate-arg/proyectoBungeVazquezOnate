import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
const API = "0b50b82888e5bf5a47ee0f15c8629906"

class DetallePeliculas extends Component {
  
  constructor(props) {
    super(props)
    
    this.state = {
      datos: null,
      estadoFavoritos : false,
      valor: "🩶",
      
      
    };
  }
  componentDidMount() {
    const ID= this.props.match.params.id
    fetch(`https://api.themoviedb.org/3/movie/${ID}?api_key=`+API)
      .then(response => response.json())
      .then(data => this.setState({datos: data}))
      .catch(error => console.log(error));
    
        let storage = localStorage.getItem("movie")
        let storageJson = JSON.parse(storage)

        if (storageJson !== null) {
            let esFavorito = storageJson.filter(id => id == ID).length > 0
            if (esFavorito) {
                this.setState({ estadoFavoritos: true, valor: "♥️" })
            }}
      
  /*Agregar cargando antes de que lleguen los datos del fetch*/       
  }

   agregarfav(id) {
        let storage = localStorage.getItem("movie")
        let storageJson = JSON.parse(storage)
        if (storageJson == null) {
            let primerValor = [id]
            let primerString = JSON.stringify(primerValor)
            localStorage.setItem("movie", primerString)
        }
        else {
            storageJson.push(id)
            let storageString = JSON.stringify(storageJson)
            localStorage.setItem("movie", storageString)
        }
        this.setState({ estadoFavoritos: true, valor: "♥️" })
    }

    Eliminar(id) {
        let listFav = localStorage.getItem("movie")
        let listFavJson = JSON.parse(listFav)
        let nuevaListFav = listFavJson.filter((i) => i !== id)
        let newListFavJson = JSON.stringify(nuevaListFav)
        localStorage.setItem("movie", newListFavJson)
        this.setState({ valor: "🩶", estadoFavoritos: false })
    }
  render(){
    return (
      <React.Fragment>
        {this.state.datos==null?
        <h3>Cargando...</h3>:
          <div>
            <Header />
            <h2 className="alert alert-primary">{this.state.datos.title}</h2>
            <section className="detalles">
              <section className="col-md-6 info">
                <h3>Descripción</h3>
                <p className="description">{this.state.datos.overview}</p>
                <p className="mt-0 mb-0" id="release-date"><strong>Fecha de estreno:</strong> {this.state.datos.release_date}</p>
                <p className="mt-0 mb-0 length"><strong>Duración:</strong> {this.state.datos.runtime} minutos </p>
                <p className="mt-0" id="votes"><strong>Puntuación:</strong> {this.state.datos.vote_average}</p>
                <ul className="mt-0 mb-0 length"><strong>Géneros:</strong> {this.state.datos.genres.map((genero,idx)=>
                <li key={idx}> {genero.name}</li>)}</ul>
                <button onClick={() => this.state.estadoFavoritos == false ? this.agregarfav(this.state.datos.id) : this.Eliminar(this.state.datos.id)} value={this.props.id} className='favoritos'>
                        {this.state.valor}
                    </button>
              </section>
              <img src={`https://image.tmdb.org/t/p/w500${this.state.datos.poster_path}`} className="col-md-6" alt={this.state.datos.title} />
            </section>
            <Footer />
          </div>
          
          }
        
        
      </React.Fragment>
    )
}}
export default DetallePeliculas;
  