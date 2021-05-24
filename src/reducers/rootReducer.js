import { combineReducers } from 'redux';

import { uiReducer } from './uiReducer';
import { authReducer } from './authReducer';
import { tipoGastoReducer } from "./tipoGastoReducer";
import { tipoIngresoReducer } from "./tipoIngresoReducer";
import { gastoReducer } from "./gastoReducer";
import { ingresoReducer } from "./ingresoReducer";




export const rootReducer = combineReducers({
    ui: uiReducer,
    tipoGasto:tipoGastoReducer,
    tipoIngreso:tipoIngresoReducer,
    gasto:gastoReducer,
    ingreso:ingresoReducer,
    auth: authReducer
})

