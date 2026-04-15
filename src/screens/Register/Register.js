import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import {Link} from 'react-router-dom'
import Cookies from 'universal-cookie'


const cookies = new Cookies()




class Register extends Component {
   constructor(props){
     super(props)
     this.state = {
       valor: ''
     }
   }


   onSumbit(email, password){
     let  usuarioACrear = {
       email: email,
       password: password,
       createdAt: Date.now(),
     }




     let usersStorage = localStorage.getItem('users')
     if (usersStorage != null) {
       let usersParseado = JSON.parse(usersStorage)


       let usersFiltrados = usersParseado.filter(function(user){
           return user.email == usuarioACrear.email;
       })


       if(usersFiltrados.length == 0){


       } else {
         usersParseado.push(usuarioACrear);
         let usersEnJson = JSON.stringify(usersParseado);
         localStorage.setItem('users', usersEnJson);
       }
     } else {
      
     }
  
   }
render() {
   return (
     <React.Fragment>
       <Header/>
       <h2 class="alert alert-primary">Registro</h2>


       <div class="row justify-content-center">
           <div class="col-md-6">
               <form>
                   <div class="form-group">
                       <label for="email">Email</label>
                       <input type="email" class="form-control" id="email" placeholder="Ingresá tu email"/>
                   </div>
                   <div class="form-group">
                       <label for="password">Contraseña</label>
                       <input type="password" class="form-control" id="password" placeholder="Ingresá tu contraseña"/>
                   </div>
                   <button  type="submit" class="btn btn-primary btn-block">Registrarse</button>
               </form>
               <p class="mt-3 text-center">¿Ya tenés cuenta? <Link to="/Login">Iniciar Sesion</Link></p>
           </div>
       </div>
    
       <Footer/>
     </React.Fragment>
   )
 }
}


export default Register
