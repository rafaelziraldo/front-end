import React from 'react'
import { TipoIngresoScreen } from './tipoIngreso/TipoIngresoScreen'
import { Link,NavLink,Switch ,Redirect,Route,BrowserRouter as Router} from "react-router-dom";

import {useSelector,useDispatch } from 'react-redux';
// import { PrivateRoute } from '../router/PrivateRoute';
import {  startLogout } from '../actions/auth';
import { TipoGastoScreen } from './tipoGasto/TipoGastoScreen';
import { GastoScreen } from './gasto/GastoScreen';
import { IngresoScreen } from './ingreso/IngresoScreen';

export const Home = () => {
     const {  name } = useSelector( state => state.auth);
     const dispatch = useDispatch();
     
    const handleLogout=(e)=>{
        e.preventDefault()
        dispatch(startLogout())
    }
    return (
        <>
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">ControlHouse</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li key='01' className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" to="/tipoIngreso">Tipo Ingreso</NavLink>
                              
                            </li>
                            <li key='02' className="nav-item">
                            <NavLink activeClassName="active"  className="nav-link" to="/tipoGasto">Tipo Gasto</NavLink>
                              
                            </li>
                            <li key='03' className="nav-item">
                            <NavLink activeClassName="active"  className="nav-link" to="/gasto">Gasto</NavLink>
                              
                            </li>
                            <li key='04' className="nav-item">
                            <NavLink activeClassName="active"  className="nav-link" to="/ingreso">Ingreso</NavLink>
                              
                            </li>
                            
                        </ul>
                    </div>
                    <div className="d-flex">
                        <ul className="navbar-nav">
                            <li key='02' className="nav-item">
                            <span className="nav-link" >{name}</span>
                              
                            </li>
                        </ul>
                        <button className="btn btn-outline-dark" onClick={handleLogout}>Salir</button>
                    </div>
                </div>
            </nav>
          
            <div className="container mt-2">
            <Switch>
                    <Route 
                        exact 
                        path="/tipoIngreso" 
                        component={ TipoIngresoScreen } 
                        
                    />
                    <Route 
                        exact 
                        path="/tipoGasto" 
                        component={ TipoGastoScreen } 
                       
                    />
                    <Route 
                        exact 
                        path="/gasto" 
                        component={ GastoScreen } 
                       
                    />
                    <Route 
                        exact 
                        path="/ingreso" 
                        component={ IngresoScreen } 
                       
                    />
                    <Redirect to="/tipoIngreso" />
            </Switch>
            </div>
        </Router>
        </>
    )
}
