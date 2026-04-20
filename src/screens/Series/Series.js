import React, { Component } from 'react'
import BuscadorFiltro from '../../components/BuscadorFiltro/BuscadorFiltro'
import Card from '../../components/Card/Card'

const API = "0b50b82888e5bf5a47ee0f15c8629906"
class Series extends Component {

  constructor(props) {
    super(props)
    this.state = {
      datos: [],
      pag: 1

    };
  }
  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc'&api_key=${API}`)

      .then(response => response.json())
      .then(data => this.setState({ datos: data.results, backup: data.results }, console.log(data)))
      .catch(error => console.log(error));
  }

  cargarMas = () => {
    let newpag = this.state.pag + 1
    fetch(`https://api.themoviedb.org/3/discover/tv?api_key=` + API + `&page=${newpag}`)
      .then(response => response.json())
      .then(data => this.setState({ datos: this.state.datos.concat(data.results), backup: this.state.datos.concat(data.results), pag: newpag }, console.log(data)))
      .catch(error => console.log(error));

  }

  filtrarSeries(Serie) {
    const series = this.state.backup.filter((i) => i.name.toLowerCase().includes(Serie.toLowerCase()))
    this.setState({
      datos: series
    })
  }

  render() {
    return (
      <React.Fragment>
        <h2 className="alert alert-warning">Todas las series</h2>
        <BuscadorFiltro filtrar={(input) => this.filtrarSeries(input)} />

        {this.state.cargados == false ?
          <h3>Cargando</h3> :
          this.state.datos.length === 0 ?
            <p className="noresult">No hay resultados para su busqueda</p> :
            <div>
              <section className="row cards" id="series">

                {this.state.datos.map((serie) => (
                  <Card type="serie"
                    titulo={serie.name}
                    key={serie.id}
                    id={serie.id}
                    imagen={serie.poster_path}
                    descripcion={serie.overview} />
                ))}
              </section><button onClick={this.cargarMas}>Cargar más</button></div>}

      </React.Fragment>
    )
  }
}

export default Series
