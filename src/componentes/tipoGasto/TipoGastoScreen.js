import React from 'react'
import { CreateEditPartial } from './CreateEditPartial'
import { TablePartial } from './TablePartial'
import {  useSelector } from 'react-redux';

export const TipoGastoScreen=()=> {
    
    
    const { verTabla } = useSelector( state => state.ui);


    return (
        <div>
            <h1>Tipo Gasto</h1>
            {verTabla?
            <TablePartial/>:
            <CreateEditPartial/>
            }
        </div>
    )
}
