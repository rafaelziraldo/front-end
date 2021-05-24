import React from 'react'
import { CreateEditPartial } from './CreateEditPartial'
import { TablePartial } from './TablePartial'
import {  useSelector } from 'react-redux';

export const TipoIngresoScreen=()=> {
    
    
    const { verTabla } = useSelector( state => state.ui);


    return (
        <div>
            <h1>Tipo Ingreso</h1>
            {verTabla?
            <TablePartial/>:
            <CreateEditPartial/>
            }
        </div>
    )
}
