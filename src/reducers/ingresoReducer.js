import { types } from '../types/types';

const initialState = {
    ingresoList:[],
    active:null,
    listSelect:[]
}



export const ingresoReducer = ( state = initialState, action ) => {

    switch (action.type) {
      case types.getBackGasto:
        return {
          ...state,
          ingresoList:[...action.payload]
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
        case types.llenarList:
        return {
          ...state,
          listSelect:action.payload
        };
      default:
        return state;
    }


}