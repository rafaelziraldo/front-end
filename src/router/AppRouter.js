import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,Redirect
   
  } from 'react-router-dom';
  
import { useDispatch, useSelector } from 'react-redux';


import { Home } from '../componentes/Home';
import { startChecking } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { RegisterScreen } from '../componentes/auth/RegisterScreen';
import { LogInerScreen } from '../componentes/auth/LogInerScreen';


export const AppRouter = () => {

    const dispatch = useDispatch();
    const { checking, uid } = useSelector( state => state.auth);

    useEffect(() => {
        
        dispatch( startChecking() );

    }, [dispatch])

    if ( checking ) {
        return (<h5>Espere...</h5>);
    }

    return (
        <Router>
            <div>
                <Switch>

                    <PublicRoute 
                        exact 
                        path="/login" 
                        component={ LogInerScreen }
                        isAuthenticated={ !!uid }
                    />
                    <PublicRoute 
                        exact 
                        path="/register" 
                        component={ RegisterScreen }
                        isAuthenticated={ !!uid }
                    />

                    <PrivateRoute 
                        
                        path="/" 
                        component={ Home } 
                        isAuthenticated={ !!uid }
                    />
                    <Redirect to="/" />
                   
                </Switch>
            </div>
        </Router>
    )
}
