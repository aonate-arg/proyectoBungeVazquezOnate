import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            estadoFavoritos: false,
            pelicula: true, 
            valor: "🩶",
            verMas: true,
        }
    }
    componentDidMount() {
        let storage = localStorage.getItem("Fav")
        let storageJson = JSON.parse(storage)

        if (storageJson !== null) {
            let esFavorito = storageJson.filter(id => id === this.props.id).length > 0
            if (esFavorito) {
                this.setState({ estadoFavoritos: true, valor: "♥️" })
            }
        }
        if (this.state.pelicula == false){
            this.setState({pelicula : true})
        }
    }

    evitsubmin(event) {
        event.preventDefault()
    }

    agregarFavMovies(id) {      
        let storage = localStorage.getItem("FavMovies")
        let storageJson = JSON.parse(storage)
        if (storageJson == null) {
            let primerValor = [id]
            let primerString = JSON.stringify(primerValor)
            localStorage.setItem("FavMovies", primerString)
        }
        else {
            storageJson.push(id)
            let storageString = JSON.stringify(storageJson)
            localStorage.setItem("FavMovies", storageString)
        }
        this.setState({ estadoFavoritos: true, valor: "♥️" })
    }

    Eliminar(id) {
        let listFav = localStorage.getItem("Fav")
        let listFavJson = JSON.parse(listFav)
        let nuevaListFav = listFavJson.filter((i) => i !== id)
        let newListFavJson = JSON.stringify(nuevaListFav)
        localStorage.setItem("Fav", newListFavJson)
        this.setState({ valor: "🩶", estadoFavoritos: false })
    }

    MostrarMas(){
        this.setState({
            verMas: true
        })
    }

    MostrarMenos(){
        this.setState({
            verMas: false
        })
    }

    render() {
        return (
            <article className="single-card-movie">
                <h5 className="card-title">{this.props.titulo}</h5>

                <img 
                    src={"https://image.tmdb.org/t/p/w342/" + this.props.imagen}
                    className="card-img-top"
                    alt="..."
                />
                <div className="cardBody">
                    <button onClick={()=>this.state.verMas? this.MostrarMenos(): this.MostrarMas()}>{this.state.verMas==true? "Mostrar descripción": "Ocultar descripción"}</button>
                    <p className={this.state.verMas? "card-text-hide": "card-text-show"}>{this.props.descripcion}</p>
                    <Link to={this.props.type=="movie"? `/DetallePeliculas/${this.props.id}` : `/DetalleSeries/${this.props.id}`} className="btn btn-primary">Ver más</Link>


                    <button onClick={() => this.state.estadoFavoritos == false ? this.agregarfav(this.props.id) : this.Eliminar(this.props.id)} value={this.props.id}>
                        {this.state.valor}
                    </button>

                </div>
            </article>
        )
    }
}

export default Card;


