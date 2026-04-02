import React, { Component } from 'react'

class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        
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
                        <p className="card-text">{this.props.descripcion}
                        </p>
                        <a href="movie.html" className="btn btn-primary">Ver más</a>
                        <a href="" className="btn alert-primary">♥️</a>
                        
                    </div>
                </article>
        )
    }
}

export default Card;


