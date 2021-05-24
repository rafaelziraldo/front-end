import { types } from '../types/types';

const initialState = {
    tipoGastoList:[],
    active:null
}



export const tipoGastoReducer = ( state = initialState, action ) => {

    switch (action.type) {
      case types.getBack:
        return {
          ...state,
          tipoGastoList:[...action.payload]
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