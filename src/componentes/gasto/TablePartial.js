import React, { useEffect } from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import { setActive, startEliminarGasto, startGasto } from '../../actions/gasto';
import { verCreate,verEdit } from '../../actions/ui';
import Swal from 'sweetalert2';
import moment from 'moment';


export const TablePartial=()=> {
  const dispatch = useDispatch();
  useEffect(() => {
        
    dispatch( startGasto() );

}, [dispatch])
 
  const { gastoList } = useSelector( state => state.gasto);

  const handleButtonCrear=(e)=>{
    e.preventDefault()
    dispatch(verCreate())
  }

  const handleButtonEdit=(e)=>{
    e.preventDefault()
    console.log(e.target.id)
    let id=e.target.id
    let gasto = gastoList.find( tp => tp._id ===id );
   
    dispatch(setActive(gasto))
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
        dispatch(startEliminarGasto(id))
        
      }
    })
   
  }
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
              <th scope="col">Fecha de Gasto</th>
              <th scope="col">Catidad($)</th>
              <th scope="col">Tipo</th>
              
            </tr>
          </thead>
          <tbody>
          { gastoList.map(tp=>(
              <tr key={tp._id}>
              <th scope="row"><button className='btn btn-info' onClick={handleButtonEdit} id={tp._id}><i className="lni lni-pencil" id={tp._id}></i>
              </button><button className='btn btn-danger' onClick={handleButtonBorrar} id={tp._id}><i className="lni lni-trash" id={tp._id}></i></button></th>
              <td>{moment(tp.date).format('DD-MM-YYYY')}</td>
              <td>{tp.cant}</td>
              <td>{tp.tipo.name}</td>
            </tr>
          ))
            
            }
          </tbody>
        </table>
      </div>
    );
}
