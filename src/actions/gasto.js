

import { eliminar, get,post,put } from '../service/services';
import { types } from '../types/types';
import { verTabla } from './ui';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css'


export const startGasto = () => {
    return  ( dispatch ) => {

         get('/gasto/getAll').then(resp=>{
             console.log(resp.data.gasto)
             if(resp.data.ok){
                dispatch(cargaGasto(resp.data.gasto))
             }
             
         })
    }
}
const cargaGasto = ( list ) => ({
    type: types.getBackGasto,
    payload: list
});

export const startCargaGasto = (data) => {
    return  ( dispatch ) => {
        console.log(data)
         post(data,'/gasto/new').then(resp=>{
            toastr.options = {
                positionClass : 'toast-bottom-right',
                hideDuration: 300,
                timeOut: 60000
              }
              toastr.success("La carga fue exitosa exitosamente")
            console.log(resp.data)
            dispatch(verTabla())
         })

        
        
    }
}

export const startEditGasto = (id,data) => {
    return  ( dispatch ) => {
        console.log(data)
         put(data,'/gasto/edit/'+id).then(resp=>{
            console.log(resp.data)
            toastr.options = {
                positionClass : 'toast-bottom-right',
                hideDuration: 300,
                timeOut: 60000
              }
              toastr.success("La edicion fue exitosa")

            dispatch(verTabla())
            dispatch(deleteAcive())
         })

        
        
    }
}
export const deleteAcive = ( ) => ({
    type: types.deleteActive,
    
});

export const setActive = ( tp ) => ({
    type: types.setActive,
    payload: tp
});

export const startLlenarSelect = () => {
    return  ( dispatch ) => {

        get('/tipoGasto/getAll').then(resp=>{
            console.log(resp.data.tipoGasto)
            if(resp.data.ok){
               dispatch(llenarListaSelect(resp.data.tipoGasto))
            }
            
        })
   }
}
export const llenarListaSelect = ( tg ) => ({
    type: types.llenarList,
    payload: tg
});

export const startEliminarGasto = (id) => {
    return  ( dispatch ) => {
        
         eliminar('/gasto/delete/'+id).then(resp=>{
           
            toastr.options = {
                positionClass : 'toast-bottom-right',
                hideDuration: 300,
                timeOut: 60000
              }
              toastr.success("El registro fue borrado exitosamente")
                dispatch(startGasto())
            
         })

        
        
    }
}






