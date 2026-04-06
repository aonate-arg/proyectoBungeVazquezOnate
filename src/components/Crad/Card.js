import React, { Component } from 'react';
import {Link} from 'react-router-dom';

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
                        <Link to={`/Detalle/${this.props.id}`} className="btn btn-primary">Ver más</Link>
                        
                        <a href="" className="btn alert-primary">♥️</a>
                        
                    </div>
                </article>
        )
    }
}

export default Card;


