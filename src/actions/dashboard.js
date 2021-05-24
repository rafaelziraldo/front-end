import { eliminar, get,post,put } from '../service/services';
import { types } from '../types/types';


export const startTraerGastoResume = () => {
    return  ( dispatch ) => {

         get('/tipoGasto/getAll').then(resp=>{
             console.log(resp.data.tipoGasto)
             if(resp.data.ok){
                dispatch(cargaTipoGasto(resp.data.tipoGasto))
             }
             
         })
    }
}
const cargaTipoGasto = ( list ) => ({
    type: types.getBack,
    payload: list
});