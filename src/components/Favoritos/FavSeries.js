import React, { Component } from 'react'
import Card from '../Card/Card'

const API = "0b50b82888e5bf5a47ee0f15c8629906"
class FavSeries extends Component {
  constructor() {
    super()
    this.state = {
      tdslosdatos: [],
      cargados: false,
    }
  }

  componentDidMount() {
    let listFav = localStorage.getItem("serie")
    console.log(listFav);
    let listFavJson = JSON.parse(listFav);
    
      if(listFavJson === null || listFavJson.lenght === 0 ){
        this.setState({cargados: false})
      }else{
        const favsRecuperados =[]
      listFavJson.map((i) =>
        fetch(`https://api.themoviedb.org/3/tv/${i}?api_key=` + API)
          .then(response => response.json())
          .then(data => {
            favsRecuperados.push(data)
            this.setState({tdslosdatos: favsRecuperados, cargados: true})
      })
          .catch(error => console.log(error))
      )}}
    
  

  render() {
    return (
      <React.Fragment>
        <h2 className="alert alert-primary">Series Favoritas</h2>
        <div>
          <section className="row cards" id="serie">
            {this.state.cargados==false? 
            <p className="noresult">No hay peliculas guardadas</p>
            :this.state.tdslosdatos.length==0?
            <p>Cargando</p>:
              this.state.tdslosdatos.map((series) => (
                <Card
                  key={series.id}
                  type="serie"
                  titulo={series.name}
                  id={series.id}
                  imagen={series.poster_path}
                  descripcion={series.overview}
                />
              ))}
          </section>
        </div>
      </React.Fragment>
    )
  }
}



export default FavSeries