import { fetchSinToken, fetchConToken } from '../helpers/fetch';
import { types } from '../types/types';
import Swal from 'sweetalert2';




export const startLogin = ( email, password ) => {
    return async( dispatch ) => {

        const resp = await fetchSinToken( 'auth', { email, password }, 'POST' );
        const body = await resp.json();

        if( body.ok ) {
            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch( login({
                uid: body.uid,
                name: body.name
            }) )
        } else {
            Swal.fire('Error', body.msg, 'error');
        }
        

    }
}

export const startRegister = ( email, password, name ) => {
    return async( dispatch ) => {

        const resp = await fetchSinToken( 'auth/new', { email, password, name }, 'POST' );
        const body = await resp.json();

        if( body.ok ) {
            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch( login({
                uid: body.uid,
                name: body.name
            }) )
        } else {
            
            let msg='';
            if(body.errors.name){
                console.log(body.errors.name)
                msg+=body.errors.name.msg+' '
            }
            if(body.errors.email){
                console.log(body.errors.email)
                msg+=body.errors.email.msg+' '
            }
            if(body.errors.password){
                console.log(body.errors.password)
                msg+=body.errors.password.msg+' '
            }
            

            Swal.fire('Error', msg, 'error');
        }


    }
}

export const startChecking = () => {
    return async(dispatch) => {

        const resp = await fetchConToken( 'auth/renew' );
        const body = await resp.json();

        if( body.ok ) {
            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            console.log('pasa por body')
            console.log(body)
            dispatch( login({
                uid: body.uid,
                name: body.name
            }) )
        } else {
            dispatch( checkingFinish() );
        }
    }
}

const checkingFinish = () => ({ type: types.authCheckingFinish });



const login = ( user ) => ({
    type: types.authLogin,
    payload: user
});


export const startLogout = () => {
    return ( dispatch ) => {

        localStorage.clear();
        dispatch( logout() );
        
    }
}

const logout = () => ({ type: types.authLogout })