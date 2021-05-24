import { types } from '../types/types';

const initialState = {
    tipoIngresoList:[],
    active:null
}



export const tipoIngresoReducer = ( state = initialState, action ) => {

    switch (action.type) {
      case types.getBack:
        return {
          ...state,
          tipoIngresoList:[...action.payload]
        };

        case types.setActive:
        return {
          ...state,
          active:action.payload
        };
        case types.deleteActive:
        return {
          ...state,
          active:null
        };

      

      default:
        return state;
    }


}