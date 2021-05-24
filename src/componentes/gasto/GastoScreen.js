import React from 'react'
import { CreateEditPartial } from './CreateEditPartial'
import { TablePartial } from './TablePartial'
import {  useSelector } from 'react-redux';

export const GastoScreen=()=> {
    
    
    const { verTabla } = useSelector( state => state.ui);


    return (
        <div>
            <h1>Gastos</h1>
            {verTabla?
            <TablePartial/>:
            <CreateEditPartial/>
            }
        </div>
    )
}
