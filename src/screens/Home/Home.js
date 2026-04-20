import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Card from '../../components/Card/Card';
import SeccionPeliculas from '../../components/Secciones/SeccionPeliculas';
import Busqueda from '../../components/Busqueda/Busqueda';
import SeccionSeries from '../../components/Secciones/SeccionSeries'



class Home extends Component {
    render() {
        return (
            <React.Fragment>   
                <Busqueda />
                <SeccionPeliculas/>
                <SeccionSeries/>
            </React.Fragment>
        )
    }
}

export default Home;

