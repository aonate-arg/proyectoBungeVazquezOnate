import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            estadoFavoritos: false,
            valor: "🩶"
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
    }

    evitsubmin(event) {
        event.preventDefault()
    }
    /*
    Ya esta funcionando, guarda el favorito y lo puede eliminar. Ya no se guarda infinitas veces tampoco. Lo unico que tengo que arreglar es 
    como hacer para que cuando se recargue la pagina el valor del corazon sea el mismo que el de local storage. Me refiero a que si esta 
    marcada como favorita la pelicula continue asi aunque se recargue.
    */
    agregarfav(id) {
        let storage = localStorage.getItem("Fav")
        let storageJson = JSON.parse(storage)
        if (storageJson == null) {
            let primerValor = [id]
            let primerString = JSON.stringify(primerValor)
            localStorage.setItem("Fav", primerString)
        }
        else {
            storageJson.push(id)
            let storageString = JSON.stringify(storageJson)
            localStorage.setItem("Fav", storageString)
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

    render() {
        return (
            <article className="single-card-movie">
                <h5 className="card-title">{this.props.titulo}</h5>

                <img
                    src={"https://image.tmdb.org/t/p/w500/" + this.props.imagen}
                    className="card-img-top"
                    alt="..."
                />
                <div className="cardBody">
                    <p className="card-text">{this.props.descripcion}</p>
                    <Link to={`/Detalle/${this.props.id}`} className="btn btn-primary">Ver más</Link>


                    <button onClick={() => this.state.estadoFavoritos == false ? this.agregarfav(this.props.id) : this.Eliminar(this.props.id)} value={this.props.id}>
                        {this.state.valor}
                    </button>

                </div>
            </article>
        )
    }
}

export default Card;


