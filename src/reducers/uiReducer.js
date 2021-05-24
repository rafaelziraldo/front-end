import { types } from '../types/types';

const initialState = {
    verTabla:true,
    verCreate:false,
    verEdit:false
}



export const uiReducer = ( state = initialState, action ) => {

    switch (action.type) {
      case types.verTabla:
        return {
          ...state,
          verTabla: true,
          verCreate: false,
          verEdit: false,
        };

      case types.verCreate:
        return {
          ...state,
          verTabla: false,
          verCreate: true,
          verEdit: false,
        };
      case types.verEdit:
        return {
          ...state,
          verTabla: false,
          verCreate: false,
          verEdit: true,
        };

      default:
        return state;
    }


}
