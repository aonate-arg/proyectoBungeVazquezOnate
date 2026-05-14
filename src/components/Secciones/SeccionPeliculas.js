import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Card from "../Card/Card";

const API = "0b50b82888e5bf5a47ee0f15c8629906"

function SeccionPeliculas(props){
    const [datos, setDatos]= useState([]);
   

    useEffect(()=> {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=' + API)
            .then(response => response.json())
            .then(data => setDatos(data.results))
            .catch(error => console.log(error));

    }, [])
    
        return (
            <div>
                <h2 className="alert alert-primary">Popular movies this week</h2>
                {datos.length === 0?
                <h3>Cargando...</h3>:
                
               
                <section className="row cards" id="movies">
               
                   
                   {datos.filter((pelicula, idx) => idx<4).map((pelicula) => (
                        <Card type= "movie"
                            key={pelicula.id}
                            titulo={pelicula.title}
                            id={pelicula.id}
                            imagen={pelicula.poster_path}
                            descripcion={pelicula.overview} />

                    ))}<Link to="/Peliculas" className='verMasBoton'>Ver todas las peliculas</Link>
                </section>
                }
        </div>
        )
    }


export default SeccionPeliculas

