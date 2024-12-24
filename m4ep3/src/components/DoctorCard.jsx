import React, { useState } from 'react';
import withLoading from './withLoading';
import Modal from './Modal';
import PropTypes from 'prop-types';

function DoctorCard({ nombre, especialidad, experiencia }) {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
      setShowModal(true);
  };

  const handleCloseModal = () => {
      setShowModal(false);
  };

  return (
    <div className="doctor-card">
      <h3>{nombre}</h3>
      <p><strong>Especialidad:</strong> {especialidad}</p>
      <button onClick={handleShowModal}>Ver más</button>
      {showModal && (
        <Modal onClose={handleCloseModal}>
          <p>Información Detallada del Doctor {nombre}</p>
          <p>Especialidad: {especialidad}</p>
          <p>Experiencia: {experiencia} años</p>
        </Modal>
      )}   
    </div>
  );
}

DoctorCard.propTypes = {
  nombre: PropTypes.string.isRequired,
  especialidad: PropTypes.string.isRequired,
  experiencia: PropTypes.number.isRequired,
};

export default withLoading(DoctorCard);