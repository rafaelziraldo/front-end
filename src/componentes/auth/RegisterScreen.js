import React from 'react'
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { startRegister } from '../../actions/auth';
import Swal from 'sweetalert2';
export const RegisterScreen=()=> {

    const dispatch = useDispatch();
    const [ formRegisterValues, handleRegisterInputChange ] = useForm({
        rName: '',
        rEmail: '',
        rPassword1: '',
        rPassword2: ''
    });

    const { rName, rEmail, rPassword1, rPassword2 } = formRegisterValues;

    const handleRegister = ( e ) => {
        e.preventDefault();

        if ( rPassword1 !== rPassword2 ) {
            return Swal.fire('Error', 'Las contraseñas deben de ser iguales','error');
        }
        console.log('?')
        dispatch( startRegister( rEmail, rPassword1, rName ) );
    }
    return (
        <div className='container mx-auto mt-5' style={{width:'400px'}}>
            <form onSubmit={ handleRegister }>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="nombre" aria-describedby="emailHelp"
                    name="rName"
                    value={ rName }
                    onChange={ handleRegisterInputChange } />
                   
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
                    name="rEmail"
                    value={ rEmail }
                    onChange={ handleRegisterInputChange } />
                   
                </div>
                <div className="mb-3">
                    <label htmlFor="pass1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="pass1" 
                    name="rPassword1"
                    value={ rPassword1 }
                    onChange={ handleRegisterInputChange }/>
                </div>
                <div className="mb-3">
                    <label htmlFor="pass2" className="form-label">Password</label>
                    <input type="password" className="form-control" id="pass2" 
                    name="rPassword2"
                    value={ rPassword2 }
                    onChange={ handleRegisterInputChange }/>
                </div>

                <button type="submit" className="btn btn-primary">Registrarse</button>
            </form>
        </div>
    )
}
