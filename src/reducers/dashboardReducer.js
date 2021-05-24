import { types } from '../types/types';

const initialState = {
    gastoresume:[],
    
}



export const tipoGastoReducer = ( state = initialState, action ) => {

    switch (action.type) {
      case types.traerGastosDashboard:
        return {
          ...state,
          gastoresume:[...action.payload]
        };

      default:
        return state;
    }


}