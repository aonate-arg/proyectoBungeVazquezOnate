import React, { Component } from 'react'
import Busqueda from '../../components/Busqueda/Busqueda'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

class Notfound extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Busqueda />
        <img src="/img/thinking-emoji.gif" alt="thinking emoji" className='gif'/>
        <div>Notfound</div>
        <Footer />
      </React.Fragment>
    )
  }
}

export default Notfound