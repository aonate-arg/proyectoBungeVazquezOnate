import React, { Component } from 'react'

import FavMovies from '../../components/Favoritos/FavMovies'
import FavSeries from '../../components/Favoritos/FavSeries'

class Favoritos extends Component {
  constructor() {
    super()
    this.state = {
      tdslosdatos: [],
    }
  }

  render() {
    return (
      <React.Fragment>
        <FavMovies />
        <FavSeries />
      </React.Fragment>
    )
  }
}

export default Favoritos;
