import React, { Component } from 'react'
import BuscadorFiltro from '../../components/BuscadorFiltro/BuscadorFiltro'
import Card from '../../components/Card/Card'
import Header from '../../components/Header/Header'


const API = "0b50b82888e5bf5a47ee0f15c8629906"
class Peliculas extends Component {

  constructor(props) {
    super(props)
    this.state = {
      datos: [],
      pag: 1, 
      cargados: false
      
    };
  }
  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${API}`)

      .then(response => response.json())
      .then(data => this.setState({ datos: data.results, backup: data.results, cargados: true },console.log(data)))
      .catch(error => console.log(error));
  }
 
  cargarMas = ()=> {
    let newpag = this.state.pag + 1
    fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=` + API + `&page=${newpag}`)
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
    
  render() {
    return (
      <React.Fragment>
        <Header />
        <h2 className="alert alert-primary">Todas las películas</h2>
        <BuscadorFiltro filtrar={(input)=> this.filtrarPeliculas(input)}/>  

        {this.state.cargados==false?
          <h3>Cargando</h3> :
          this.state.datos.length === 0 ? 
          <p className="noresult">No hay resultados para su busqueda</p>:
          <div>
              
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

/*aca también use el if ternario con dos condiciones, ver si está bien*/
