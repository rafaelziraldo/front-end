import React, { useEffect } from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { setActive, startEliminarTipoGasto, startTipoGasto } from '../../actions/tipoGasto';
import { verCreate,verEdit } from '../../actions/ui';
import Swal from 'sweetalert2';


export const TablePartial=()=> {
  const dispatch = useDispatch();
  const { tipoGastoList } = useSelector( state => state.tipoGasto);

  const handleButtonCrear=(e)=>{
    e.preventDefault()
    dispatch(verCreate())
  }

  const handleButtonEdit=(e)=>{
    e.preventDefault()
    console.log(e.target.id)
    let id=e.target.id
    let tipogasto = tipoGastoList.find( tp => tp._id ===id );
   
    dispatch(setActive(tipogasto))
    dispatch(verEdit())
  }
  const handleButtonBorrar=(e)=>{
    e.preventDefault()
    console.log(e.target.id)
    Swal.fire({
      title: 'Estas seguro de Eliminar?',
      text: "No se puede volver para atras!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK!'
    }).then((result) => {
      if (result.isConfirmed) {
        let id=e.target.id
        dispatch(startEliminarTipoGasto(id))
        
      }
    })
   
  }

  useEffect(() => {
        
    dispatch( startTipoGasto() );

}, [dispatch])


    return (
      <div>
        <button type="button" className="btn btn-primary" onClick={handleButtonCrear}>
          Crear
        </button>
        <hr />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Acciones</th>
              <th scope="col">Nombre</th>
              
            </tr>
          </thead>
          <tbody>
          {tipoGastoList.map(tp=>(
              <tr key={tp._id}>
              <th scope="row"><button className='btn btn-info' onClick={handleButtonEdit} id={tp._id}><i className="lni lni-pencil" id={tp._id}></i>
              </button><button className='btn btn-danger' onClick={handleButtonBorrar} id={tp._id}><i className="lni lni-trash" id={tp._id}></i></button></th>
              <td>{tp.name}</td>
             
            </tr>
          ))
            
            }
          </tbody>
        </table>
      </div>
    );
}
