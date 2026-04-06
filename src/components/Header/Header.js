import react from 'react'
import {Link} from 'react-router-dom';

function Header() {
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
}

export default Header;