

import { eliminar, get,post,put } from '../service/services';
import { types } from '../types/types';
import { verTabla } from './ui';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css'


export const startTipoIngreso = () => {
    return  ( dispatch ) => {

         get('/tipoIngreso/getAll').then(resp=>{
             console.log(resp.data.tipoGasto)
             if(resp.data.ok){
                dispatch(cargaTipoIngreso(resp.data.tipoIngreso))
             }
             
         })
    }
}
const cargaTipoIngreso = ( list ) => ({
    type: types.getBack,
    payload: list
});

export const startCargaTipoIngreso = (data) => {
    return  ( dispatch ) => {
        console.log(data)
         post(data,'/tipoIngreso/new').then(resp=>{
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

export const startEditTipoIngreso = (id,data) => {
    return  ( dispatch ) => {
        console.log(data)
         put(data,'/tipoIngreso/edit/'+id).then(resp=>{
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

export const startEliminarTipoIngreso = (id) => {
    return  ( dispatch ) => {
        
         eliminar('/tipoIngreso/delete/'+id).then(resp=>{
           
            toastr.options = {
                positionClass : 'toast-bottom-right',
                hideDuration: 300,
                timeOut: 60000
              }
              toastr.success("El registro fue borrado exitosamente")
                dispatch(startTipoIngreso())
            
         })

        
        
    }
}






