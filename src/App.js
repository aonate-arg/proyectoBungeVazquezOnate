import React from "react";
import {Switch, Route} from 'react-router-dom';
import Home from './screens/Home/Home';
import Login from './screens/Login/Login';
import Notfound from './screens/Notfound/Notfound';
import Register from './screens/Register/Register';
import Results from './screens/Results/Results';
import Vertodos from './screens/Vertodos/Vertodos'
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Detalle from "./screens/Detalles/Detalle";
import Favoritos from './screens/Favoritos/Favoritos'

function App() {
  return (
    <React.Fragment>
      <Home />

    </React.Fragment>
  );
}

export default App;