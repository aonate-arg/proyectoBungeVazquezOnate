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
import Card from "./components/Crad/Card";

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/Login" component={Login}/>
      <Route path="/Notfound" component={Notfound}/>
      <Route path="/Register" component={Register}/>
      <Route path="/Results" component={Results}/>
      <Route path="/Vertodos" component={Vertodos}/>
      <Route path="/Detalle" component={Detalle}/>
      <Route path="/Favoritos" component={Favoritos}/>
      <Route path="" component={Notfound}/>
      <Card/>
    </Switch>
  );
}

export default App;
