import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import PropTypes from 'prop-types';

function UserProfile() {
  const {usuario} = useContext(UserContext);
  return (
    <React.Fragment>
      <h2>Perfil de Usuario</h2>
      <p>ID: {usuario.id}</p>
      <p>Nombre: {usuario.nombre}</p>
    </React.Fragment>
  );
}

UserProfile.propTypes = {
  usuario: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    })
  };

export default UserProfile;