import React, { Fragment } from "react";
import { useForm } from "react-hook-form";

const Agregar = (props) => {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data, e) => {

    //e.target.reset();
    console.log(data);

    props.addUser(data);
  }

  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        
      <label>Nombre</label>
        <input
          placeholder="Ingrese Nombre"
          name="nombre"
          type="text"          
          required
             />

        <label>Edad</label>
        <input
          placeholder="Ingrese Edad"    
          type="number"
          name="edad"          
            required/>
        <label>Elige tu ocupacion</label>
        <select name="ocupacion">         
          
          <option value="Estudiante">Estudiante</option>
          <option value="Empleado">Empleado</option>
          <option value="jubilado">Jubiliado</option>
        </select>

        <button variant="contained" color="primary">
          Envia
        </button>
      </form>
    </Fragment>
  );
};

export default Agregar;
