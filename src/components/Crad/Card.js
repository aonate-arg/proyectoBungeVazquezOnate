import React, { Component } from 'react'

export class Card extends Component {
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
                        <h5 className="card-title">F1</h5>
                        <p className="card-text">
                            Racing legend Sonny Hayes is coaxed out of retirement to lead a struggling
                            Formula 1 team—and mentor a young hotshot driver—while chasing one more chance at glory.
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