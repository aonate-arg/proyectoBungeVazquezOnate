import React, { Component } from 'react'

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {info : props}
        console.log(props)
    }
    render() {
        return (
            <React.Fragment>
                <article className="single-card-movie">
                    <img
                        src="https://image.tmdb.org/t/p/w500/9PXZIUsSDh4alB80jheWX4fhZmy.jpg"
                        className="card-img-top"
                        alt="..."
                    />
                    <div className="cardBody">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">
                        </p>
                        <a href="movie.html" className="btn btn-primary">Ver más</a>
                        <a href="" className="btn alert-primary">♥️</a>
                    </div>
                </article>
            </React.Fragment>
        )
    }
}

export default Card;