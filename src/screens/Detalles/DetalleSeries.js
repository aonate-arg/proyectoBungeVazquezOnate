import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Cookies from 'universal-cookie';

const API = "0b50b82888e5bf5a47ee0f15c8629906"
const cookies = new Cookies()
class DetalleSeries extends Component {

  constructor(props) {
    super(props)
    this.state = {
      datos: null,
      estadoFavoritos: false,
      valor: "🩶",
      log: false
    };
  }

  componentDidMount() {
    const ID = this.props.match.params.id
    fetch(`https://api.themoviedb.org/3/tv/${ID}?api_key=` + API)

      .then(response => response.json())
      .then(data => this.setState({ datos: data }))
      .catch(error => console.log(error));
    let storage = localStorage.getItem("serie")
    let storageJson = JSON.parse(storage)

    if (storageJson !== null) {
      let esFavorito = storageJson.filter(id => id == ID).length > 0
      if (esFavorito) {
        this.setState({ estadoFavoritos: true, valor: "♥️" })
      }
    }
    this.verificar()
  }

  verificar() {
    let logeado = cookies.get('userEmail')
    if (logeado != null) {
      this.setState({ log: true })
    } else {
      this.setState({ log: false })
    }
  }

  agregarfav(id) {
    let storage = localStorage.getItem("serie")
    let storageJson = JSON.parse(storage)
    if (storageJson == null) {
      let primerValor = [id]
      let primerString = JSON.stringify(primerValor)
      localStorage.setItem("serie", primerString)
    }
    else {
      storageJson.push(id)
      let storageString = JSON.stringify(storageJson)
      localStorage.setItem("serie", storageString)
    }
    this.setState({ estadoFavoritos: true, valor: "♥️" })
  }

  Eliminar(id) {
    let listFav = localStorage.getItem("serie")
    let listFavJson = JSON.parse(listFav)
    let nuevaListFav = listFavJson.filter((i) => i !== id)
    let newListFavJson = JSON.stringify(nuevaListFav)
    localStorage.setItem("serie", newListFavJson)
    this.setState({ valor: "🩶", estadoFavoritos: false })
  }

  render() {
    return (
      <React.Fragment>
        {this.state.datos == null ?
          <h3>Cargando...</h3> :
          <div>
            <h2 className="alert alert-warning">{this.state.datos.name}</h2>
            <section className="detalles">
              <section className="col-md-6 info">
                <h3>Descripción</h3>
                <p className="description">{this.state.datos.overview}</p>
                <p className="mt-0 mb-0" id="release-date"><strong>Fecha de estreno:</strong> {this.state.datos.first_air_date}</p>
                <p className="mt-0" id="votes"><strong>Puntuación:</strong> {this.state.datos.vote_average}</p>
                <ul className="mt-0 mb-0 length"><strong>Géneros:</strong> {this.state.datos.genres.map((genero, idx) =>
                  <li key={idx}> {genero.name}</li>)}</ul>
                <button onClick={() => this.state.estadoFavoritos == false ? this.agregarfav(this.state.datos.id) : this.Eliminar(this.state.datos.id)} value={this.props.id} className={this.state.log ? 'favoritos' : 'card-text-hide'}>
                  {this.state.valor}
                </button>
              </section>
              <img src={`https://image.tmdb.org/t/p/w500${this.state.datos.poster_path}`} className="col-md-6" alt={this.state.datos.title} />
            </section>
          </div>
        }
      </React.Fragment>
    )
  }
}

export default DetalleSeries;
