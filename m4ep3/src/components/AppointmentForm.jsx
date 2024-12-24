import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

function AppointmentForm(props ) {
  const [nombrePaciente, setNombrePaciente] = useState('');
  const inputPacienteRef = useRef(null);
  const [doctorSeleccionado, setDoctorSeleccionado] = useState('');
  //const inputDoctorRef = useRef(null);
  const [fechaCita, setFechaCita] = useState('');
  //const inputFechaRef = useRef(null);

  useEffect(() => {
    if (inputPacienteRef.current) {
     inputPacienteRef.current.focus();
     }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Cita agendada:', { nombrePaciente, doctorSeleccionado, fechaCita });
  };

  const handleChangePaciente = (e) => {
    setNombrePaciente(e.target.value);
  }

  const handleChangeDoctor = (e) => {
    setDoctorSeleccionado(e.target.value);
  }

  const handleChangeFecha = (e) => {
    setFechaCita(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Nombre del Paciente:
          <input type="text" value={nombrePaciente} onChange={handleChangePaciente} ref={inputPacienteRef} />
        </label>
        <label>
          Doctor:
          <input type="text" value={doctorSeleccionado} onChange={handleChangeDoctor} />
        </label>
        <label>
          Fecha:
          <input type="date" value={fechaCita} onChange={handleChangeFecha} />
        </label>
      </div>
      <button type="submit">Agendar Cita</button>
    </form>
  );
}

AppointmentForm.propTypes = {
  handleSubmit: PropTypes.func
}

export default AppointmentForm;