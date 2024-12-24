import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [usuario, setUser] = useState({
    id: 123,
    nombre: 'Juan Matamala Cuevas',
  });

  return (
    <UserContext.Provider value={{ usuario, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProvider;