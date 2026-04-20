import React from "react";
import {Switch, Route} from 'react-router-dom';
import Home from './screens/Home/Home';

import Notfound from './screens/Notfound/Notfound';
import Register from './screens/Register/Register';
import Results from './screens/Results/Results';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import DetallePeliculas from "./screens/Detalles/DetallePeliculas";
import DetalleSeries from "./screens/Detalles/DetalleSeries"
import Favoritos from './screens/Favoritos/Favoritos'
import Card from "./components/Card/Card";
import Series from './screens/Series/Series'
import Peliculas from './screens/Peliculas/Peliculas'
import Login from './screens/Login/Login'

function App() {
  return (
    <React.Fragment>
    <Header />
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/Login" component={Login}/>
      <Route path="/Register" component={Register}/>
      <Route path="/Results/:buscado/:tipo" component={Results}/>
      <Route path="/DetallePeliculas/:id" component={DetallePeliculas}/>
      <Route path="/DetalleSeries/:id" component={DetalleSeries}/>
      <Route path="/Favoritos" component={Favoritos}/>
      <Route path="/Series" component={Series}/>
      <Route path="/Peliculas" component={Peliculas}/>
      <Route path="" component={Notfound}/>
    </Switch>
    <Footer />
    </React.Fragment>

  );
}

export default App;
