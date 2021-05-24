import React from 'react'
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { startLogin} from '../../actions/auth';
import {Link} from "react-router-dom";

export const LogInerScreen=()=> {
    const dispatch = useDispatch();

    
    const [ formLoginValues, handleLoginInputChange ] = useForm({
        lEmail: '',
        lPassword: ''
    });

    const { lEmail, lPassword } = formLoginValues;

    const handleLogin = ( e ) => {
        e.preventDefault();
        dispatch( startLogin( lEmail, lPassword ) );
    }
    return (
        <div className='container mx-auto mt-5' style={{width:'400px'}}>
            <form onSubmit={ handleLogin }>
                
                   
                
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
                    name="lEmail"
                    value={ lEmail }
                    onChange={ handleLoginInputChange } />
                   
                </div>
                <div className="mb-3">
                    <label htmlFor="pass1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="pass1" 
                    name="lPassword"
                    value={ lPassword }
                    onChange={ handleLoginInputChange }/>
                </div>
                

                <button type="submit" className="btn btn-primary">Ingresar</button>
                <p>No estas registrado? <span><Link to="/register">Clickea aqui</Link></span></p>
            </form>
        </div>
    )
}
