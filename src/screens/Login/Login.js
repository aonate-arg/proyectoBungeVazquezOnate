import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import {Link} from 'react-router-dom';


const API = "b4012469dde0367276c9701f8ecc44fe"
class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
         
        };
    }
   
    
    /*comparar cada letra del titulo que buscas. También hace que si no coincide ninguno mostrar otro mensaje, no el cargando/ esto tendria que ser un componente?*/

    render() {
        return (
            <React.Fragment>
                <Header />


                <h2 className="alert alert-primary">Iniciar sesión</h2>

                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Ingresá tu email"/>
                            </div>
                            <div className="form-group">
                                <label for="password">Contraseña</label>
                                <input type="password" className="form-control" id="password" placeholder="Ingresá tu contraseña"/>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Iniciar sesión</button>
                        </form>
                        <p class="mt-3 text-center">¿No tenés cuenta? <Link to="/Register">Registrarse</Link></p> 
                    </div>
                </div>

            </React.Fragment>
        )
    }
}
export default Login

/*el for para que es?, cuando inicias sesion usar ruta parametrizada hacia home*/