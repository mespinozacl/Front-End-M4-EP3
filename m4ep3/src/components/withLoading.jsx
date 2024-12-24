import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function withLoading(WrappedComponent) {
  return function WithLoading(props) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }, []);

    return loading ? <div>Cargando...</div> : <WrappedComponent {...props} />;
  };
}

withLoading.propTypes = {
  WrappedComponent: PropTypes.elementType.isRequired,
};

export default withLoading;
