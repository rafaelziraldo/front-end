import React from "react";
import { verTabla } from "../../actions/ui";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAcive,
  startCargaTipoGasto,
  startEditTipoGasto,
} from "../../actions/tipoGasto";

export const CreateEditPartial = () => {
  const { verCreate } = useSelector((state) => state.ui);
  const { active } = useSelector((state) => state.tipoGasto);

  const dispatch = useDispatch();
  const [formValues, handleInputChange] = useForm({
    
    name: active!=null ?active.name:"",
  });
  const { name } = formValues;
  
  const handleVolver = (e) => {
    e.preventDefault();
    dispatch(verTabla());
    dispatch(deleteAcive())
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    if (verCreate) {
      dispatch(startCargaTipoGasto(formValues));
    } else {
      
      dispatch(startEditTipoGasto(active._id,formValues));
    }
  };

  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={handleVolver}>
        Volver
      </button>
      <hr />
      <form onSubmit={handlerSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="name"
            value={name}
            onChange={handleInputChange}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Cargar" />
      </form>
    </div>
  );
};
