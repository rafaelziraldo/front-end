import React , { useEffect } from "react";
import { verTabla } from "../../actions/ui";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAcive,
  startCargaGasto,
  startEditGasto,
  startLlenarSelect
} from "../../actions/gasto";
import moment from 'moment'

export const CreateEditPartial = () => {
  const { verCreate } = useSelector((state) => state.ui);
  const { active, listSelect } = useSelector((state) => state.gasto);

  const dispatch = useDispatch();
  const [formValues, handleInputChange] = useForm({
    
    cant: active!=null ?active.cant:0,
    description: active!=null ?active.description:"",
    tipo: active!=null ?active.tipo._id:"",
    date: active!=null ?active.date:moment().format('YYYY-MM-DD'),
  });
  const { cant, description,tipo,date } = formValues;
  
  const handleVolver = (e) => {
    e.preventDefault();
    dispatch(verTabla());
    dispatch(deleteAcive())
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    if (verCreate) {
      dispatch(startCargaGasto(formValues));
      console.log('form',formValues)
    } else {
      
      dispatch(startEditGasto(active._id,formValues));
    }
  };
  useEffect(() => {
        
    dispatch( startLlenarSelect() );

}, [dispatch])
  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={handleVolver}>
        Volver
      </button>
      <hr />
      <form onSubmit={handlerSubmit}>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Fecha de carga
          </label>
          <input
            type="date"
            className="form-control"
            id="date"
            name="date"
            value={moment(date).format('YYYY-MM-DD')}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cant" className="form-label">
            Cantidad($)
          </label>
          <input
            type="number"
            className="form-control"
            id="cant"
            name="cant"
            value={cant}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Descripcion
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={description}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tipo" className="form-label">
            Tipo Gasto
          </label>
          <select 
          class="form-select" 
          aria-label="Default select example"
          id="tipo"
          name="tipo"
          value={tipo}
          onChange={handleInputChange}
          >
            <option value={"0"}>Selecione uno</option>
           {listSelect.map(ls=>(
            <option value={ls._id}>{ls.name}</option>
          ))
           }
           
          </select>
        </div>
        <input type="submit" className="btn btn-primary" value="Cargar" />
      </form>
    </div>
  );
};
