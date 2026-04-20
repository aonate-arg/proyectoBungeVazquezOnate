import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookies = new Cookies()
class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            valor: false
        }
    }

    componentDidMount(){
        this.verificar()
    }

    verificar(){
        let logeado = cookies.get('userEmail')

        if (logeado != null) {
            this.setState({valor: true})
        } else {
            this.setState({valor: false})
        }
        console.log(logeado);
        console.log(this.state);
        
        
    }

    render(){
        return (
        <nav className='allHeader'>
            <img className='logoHeader' src="/img/logoDigitalPelis.png" alt="Logo Digital Pelis"  />
            <ul className="nav nav-tabs my-4">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Peliculas" className="nav-link">Películas</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Series" className="nav-link">Series</Link>
                </li>
                <li className={this.state.valor?'nav-item':'card-text-hide'}>
                    <Link to="/Favoritos" className="nav-link">Favoritos</Link>
                </li>
                <div className={this.state.valor?'card-text-hide':'userNav'}>
                    <li className="nav-item ml-auto">
                        <Link to="/Register" className="nav-link">Registro</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Login" className="nav-link">Login</Link>
                    </li>

                </div>
            </ul>
        </nav>
        )
    }
    
}

export default Header;