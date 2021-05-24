

import { eliminar, get,post,put } from '../service/services';
import { types } from '../types/types';
import { verTabla } from './ui';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css'


export const startIngreso = () => {
    return  ( dispatch ) => {

         get('/ingreso/getAll').then(resp=>{
             console.log(resp.data.gasto)
             if(resp.data.ok){
                dispatch(cargaIngreso(resp.data.ingresos))
             }
             
         })
    }
}
const cargaIngreso = ( list ) => ({
    type: types.getBackGasto,
    payload: list
});

export const startCargaIngreso = (data) => {
    return  ( dispatch ) => {
        console.log(data)
         post(data,'/ingreso/new').then(resp=>{
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

export const startEditIngreso = (id,data) => {
    return  ( dispatch ) => {
        console.log(data)
         put(data,'/ingreso/edit/'+id).then(resp=>{
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

        get('/tipoIngreso/getAll').then(resp=>{
            console.log(resp.data.tipoGasto)
            if(resp.data.ok){
               dispatch(llenarListaSelect(resp.data.tipoIngreso))
            }
            
        })
   }
}
export const llenarListaSelect = ( tg ) => ({
    type: types.llenarList,
    payload: tg
});

export const startEliminarIngreso = (id) => {
    return  ( dispatch ) => {
        
         eliminar('/ingreso/delete/'+id).then(resp=>{
           
            toastr.options = {
                positionClass : 'toast-bottom-right',
                hideDuration: 300,
                timeOut: 60000
              }
              toastr.success("El registro fue borrado exitosamente")
                dispatch(startIngreso())
            
         })

        
        
    }
}






