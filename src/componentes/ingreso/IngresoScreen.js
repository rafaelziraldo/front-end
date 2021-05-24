import React from 'react'
import { CreateEditPartial } from './CreateEditPartial'
import { TablePartial } from './TablePartial'
import {  useSelector } from 'react-redux';

export const IngresoScreen=()=> {
    
    
    const { verTabla } = useSelector( state => state.ui);


    return (
        <div>
            <h1>Ingresos</h1>
            {verTabla?
            <TablePartial/>:
            <CreateEditPartial/>
            }
        </div>
    )
}
