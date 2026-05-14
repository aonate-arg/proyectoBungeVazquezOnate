import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Card from "../Card/Card";

const API= "0b50b82888e5bf5a47ee0f15c8629906"
function SeccionSeries(props) {
    const [datos, setDatos]= useState([]);
  useEffect(()=> {
    fetch('https://api.themoviedb.org/3/tv/airing_today?api_key=' + API)
            .then(response => response.json())
            .then(data => setDatos( data.results))
            .catch(error => console.log(error));
  }, [])
   

        return (
            <div>
                <h2 className="alert alert-primary">Series now playing</h2>
                {datos.length == 0?
                <h3>Cargando...</h3>:
                <section className="row cards" id="on-air-today">
                    {datos.filter((series, idx) => idx<4).map((series) => (
                        <Card type="serie"
                            key={series.id}
                            titulo={series.name}
                            id={series.id}
                            imagen={series.poster_path}
                            descripcion={series.overview} />

                    ))}<Link to="/Series" className='verMasBoton'>Ver todas las series</Link>
                </section>}
            </div>
        )
    }
    
  


export default SeccionSeries
