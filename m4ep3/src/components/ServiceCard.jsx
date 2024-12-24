import React from 'react';
import PropTypes from 'prop-types';

function ServiceCard({ nombre }) {
  return (
    <div className="service-card">
      <h3>{nombre}</h3>
    </div>
  );
}

ServiceCard.propTypes = {
  nombre: PropTypes.string.isRequired,
};

export default ServiceCard;