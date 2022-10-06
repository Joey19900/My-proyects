import React from "react";
import { useState, useContext } from "react";
import swal from "sweetalert";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const showAlert = () => {
    swal({
      title: "confirmar",
      text: "¿Esta seguro de eliminar está tarea?",
      icon: "waring",
      button: "aceptar",
      //agregar parametro para cancelar elimi
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="ma-w-md mx-auto">
      <h1 className="2xl font-bold text white mb-3">Crea tu tarea</h1>
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <input
          minLength={3}
          maxLength={30}
          placeholder="Escibre"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
        />

        <textarea
          maxLength={100}
          placeholder="Escribe la nueva descripción sobre la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>

        <button className="bg-indigo-500 px-3 py1 text-white">Guardar</button>

        <div>
          <button onClick={showAlert}>ELIMINAR</button>
        </div>
      </form>
    </div>
  );
}
//mandar pullrequest antes del demo
export default TaskForm;
