import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap/dist/react-bootstrap.min.js'
//import './src/assets/js/script.js'
//import './src/assets/css/css.css'
//import 'jquery/dist/jquery.js'
//import 'bootstrap/dist/js/bootstrap.min.js'
//import 'jquery/dist/jquery.js'
import './App.css';

//import equipos
import Navegacion from './componentes/navegacion'
import listaEstadistica from './componentes/listaEstadistica'
import landingFutbol from './componentes/landingFutbol'
import crearUsuario from './componentes/crearUsuario'
import crearEstadistica from './componentes/crearEstadistica'
import Login from './componentes/login';


class App extends React.Component{

  constructor (props){
    super(props);
  };
consultar(){
  let almacenamiento = sessionStorage.getItem("sesion");

  if (almacenamiento == null || almacenamiento == undefined){

    return 0;
    
  }else {
    return almacenamiento;
  }
  


};

  render(){
  
    return (
      <Router>
       <Navegacion logeado={this.consultar()} history={this.props.history} />
        <div className="container p-4">
          <Route path="/crearEstad" component={crearEstadistica} proxy/>
          <Route path="/landingFutbol" component={landingFutbol}/>
          <Route path="/crearusuario" component={crearUsuario}/>
          <Route path="/listaEstadistica" component={listaEstadistica}/>
          <Route path="/login" component={Login}/>

        </div>


      </Router>
    );


  }

   
}

export default App;
