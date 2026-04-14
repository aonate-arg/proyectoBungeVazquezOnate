import React, { Component } from 'react'
import BuscadorFiltro from '../../components/BuscadorFiltro/BuscadorFiltro'
import Card from '../../components/Card/Card'
import Header from '../../components/Header/Header'


const API = "b4012469dde0367276c9701f8ecc44fe"
class Peliculas extends Component {

  constructor(props) {
    super(props)
    this.state = {
      datos: [],
      pag: 1
      
    };
  }
  componentDidMount() {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=' + API)

      .then(response => response.json())
      .then(data => this.setState({ datos: data.results, backup: data.results },console.log(data)))
      .catch(error => console.log(error));
  }
 
  cargarMas = ()=> {
    let newpag = this.state.pag + 1
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=` + API + `&page=${newpag}`)
      .then(response => response.json())
      .then(data => this.setState({ datos: this.state.datos.concat(data.results), backup: this.state.datos.concat(data.results), pag: newpag },console.log(data)))
      .catch(error => console.log(error));

  }

    filtrarPeliculas(Pelicula){
        const peliculas = this.state.backup.filter((i)=> i.title.toLowerCase().includes(Pelicula.toLowerCase()))
        this.setState({
          datos: peliculas
        })
    }
    /*comparar cada letra del titulo que buscas. También hace que si no coincide ninguno mostrar otro mensaje, no el cargando/ esto tendria que ser un componente?*/
    
  render() {
    return (
      <React.Fragment>
        <Header />
        <h2 className="alert alert-primary">Todas las películas</h2>

        {this.state.datos.length === 0 ?
          <h3>Cargando...</h3> :
          <div>
            <BuscadorFiltro filtrar={(input)=> this.filtrarPeliculas(input)}/>  
            <section className="row cards" id="movies">
              {this.state.datos.map((pelicula) => (
                <Card type="movie"
                  titulo={pelicula.title}
                  id={pelicula.id}
                  imagen={pelicula.poster_path}
                  descripcion={pelicula.overview} />
              ))}
            </section>
            <button onClick={this.cargarMas}>Cargar más</button>
          </div>}

      </React.Fragment>
    )
  }
}

export default Peliculas

/*Agregar buscador con filter*/
