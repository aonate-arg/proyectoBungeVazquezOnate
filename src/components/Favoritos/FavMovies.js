import {useState, useEffect} from 'react';
import Card from '../Card/Card'

const API = "0b50b82888e5bf5a47ee0f15c8629906"
function FavMovies() {
  const [tdslosdatos, setTdslosdatos]= useState([]);
  const [cargados, setCargados]= useState(false);

  useEffect(()=>{
    let listFav = localStorage.getItem("movie")
    console.log(listFav);
    let listFavJson = JSON.parse(listFav);


    if (listFavJson === null || listFavJson.lenght === 0) {
      setCargados(false);

    } else {
      const favsRecuperados = []
      listFavJson.map((i) =>
        fetch(`https://api.themoviedb.org/3/movie/${i}?api_key=` + API)
          .then(response => response.json())
          .then(data => {
            favsRecuperados.push(data)
            setTdslosdatos(favsRecuperados);
            setCargados(true)
          })
          .catch(error => console.log(error))
      )
    }

  })
 

    return (
      <div>
        <h2 className="alert alert-primary">Peliculas Favoritas</h2>
        <div>
          <section className="row cards" id="movie">
            {cargados == false ?
              <p className="noresult">No hay peliculas guardadas</p>
              :tdslosdatos.length == 0 ?
                <p>Cargando</p> :
                tdslosdatos.map((peliculas) => (
                  <Card
                    key={peliculas.id}
                    type="movie"
                    titulo={peliculas.title}
                    id={peliculas.id}
                    imagen={peliculas.poster_path}
                    descripcion={peliculas.overview}
                  />
                ))

            }


          </section>
        </div>
      </div>
    )
  }

export default FavMovies