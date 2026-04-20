<<<<<<< HEAD
import React from 'react'
import {Link} from 'react-router-dom';
import Cookies from 'universal-cookie'

const cookies = new Cookies()
function Header(){


    return(
                <nav>
                    <ul class="nav nav-tabs my-4">
                        <li class="nav-item">
                            <Link to="/" class="nav-link">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/Peliculas" class="nav-link">Películas</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/Series" class="nav-link">Series</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/Favoritos" class="nav-link">Favoritos</Link>
                        </li>
                        <li class="nav-item ml-auto">
                            <Link to="/Register" class="nav-link">Registro</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/Login" class="nav-link">Login</Link>
                        </li>
                    </ul>
                </nav>
        )
    
=======
import react from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookies = new Cookies()
function Header() {


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
                <li className="nav-item">
                    <Link to="/Favoritos" className="nav-link">Favoritos</Link>
                </li>
                <div className='userNav'>
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
>>>>>>> d3d0fb580520c8f2fdc224ecf08ceff1803ab844
}

export default Header;