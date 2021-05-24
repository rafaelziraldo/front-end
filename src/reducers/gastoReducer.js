import { types } from '../types/types';

const initialState = {
    gastoList:[],
    active:null,
    listSelect:[]
}



export const gastoReducer = ( state = initialState, action ) => {

    switch (action.type) {
      case types.getBackGasto:
        return {
          ...state,
          gastoList:[...action.payload]
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