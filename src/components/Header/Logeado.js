import React, { Component } from 'react'
import Cookies from 'universal-cookie';

const cookies = new Cookies
class Logeado extends Component {
    constructor(props){
        super(props)
        this.state = {
            valor: ''
        }
    }

    reemplazar(){
        let usuario = cookies.get('userEmail');

        if(usuario != null){

        }
    }

    render() {
        return (
            <div>
                <li class="nav-item ml-auto">
                    <Link to="/Register" class="nav-link">Registro</Link>
                </li>
                <li class="nav-item">
                    <Link to="/Login" class="nav-link">Login</Link>
                </li>
            </div>    
        )
    }
}

export default Logeado;