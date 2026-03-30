import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
const API = "b4012469dde0367276c9701f8ecc44fe"

class Home extends Component {
    constructor(props){
        super(props)
        this.state ={
            datos: ''
        }
    }
    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/popular?api_key='+ API)
        
            .then( response => response.json())
            .then( data => this.setState(
                {datos: data.results}
            ))
            .catch( error => console.log(error));
    }
    render(){
    return (
        <React.Fragment>
          <Header/>
          <Footer/>
        </React.Fragment>
    )
  }
}

export default Home;