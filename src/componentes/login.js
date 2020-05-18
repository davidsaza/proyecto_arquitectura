import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/css.css'
//import '../assets/js/script'
import 'bootstrap/dist/css/bootstrap.min.css'


//hacer una infografia de la materia arquitectura de informacion
//fixed-top esta es para bloquear la barra
export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            usuario:"",
            password:"",
            logeado: "0"


        }
        
    }
    logearse(){
        const {usuario,password}=this.state;
        if (usuario == "pepito" && password == "123"){
            sessionStorage.setItem("sesion", "1");
            this.setState({logeado: "1"});
            this.props.history.push("/login");

        }else {
            this.setState({logeado: "0"});

        }
        
    }
    
    render() {

        const {usuario,password}=this.state;
    
        return (
            <div><form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={usuario} onChange={(e)=>this.setState({usuario:e.target.value})} />
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e)=>this.setState({password:e.target.value})} />
            </div>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
              <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary" onClick={()=>this.logearse()}>Submit</button>
          </form>
          </div>
        )
    }
}
