import React, { useContext, useEffect, useState } from 'react';
import { DoctorContext } from './DoctorContext';
import DoctorCard from './DoctorCard';
import PropTypes from 'prop-types';


function DoctorList() {
  const { doctors, setDoctors } = useContext(DoctorContext);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Error fetching doctors');
        }

        const data = await response.json();

        const specialties = ['Pediatría', 'Cardiología', 'Cirugía', 'Traumatología'];
        
        const data2 = 
          data.map(({ id, name }) => ({
            id: id,
            nombre: name,
            especialidad: specialties[Math.floor(Math.random() * specialties.length)],
            experiencia: Math.floor(Math.random() * 10) + 1,
            descripcion: '...',
          }));
        setDoctors(data2); // Update context's doctors state with fetched data
        //console.log(data2);
      } catch (err) {
        setError(err.message); // Set error state for handling
      } finally {
        setIsLoading(false); // Set loading state to false after fetch (success or failure)
      }
    };

    fetchDoctors(); // Call the fetch function
  }, []); // Empty dependency array to fetch doctors only once

  // Handle loading and error states
  if (isLoading) {
    return <p>Cargando doctores...</p>; // Display a loading message
  }


  if (error) {
    return <p>Error: {error}</p>; // Display an error message
  }

  return (
    <div>
      <h2>Lista de Doctores</h2>
      <div>
      <React.Fragment>
          {doctors.map(doctor => (
            <DoctorCard
              key={doctor.id}
              nombre={doctor.nombre}
              especialidad={doctor.especialidad}
              experiencia={doctor.experiencia}
            />
          ))}
      </React.Fragment>
      </div>
      <div id="modal-root" />
    </div>
  );
}

DoctorList.propTypes = {
  doctors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nombre: PropTypes.string.isRequired,
      especialidad: PropTypes.string.isRequired,
      experiencia: PropTypes.number.isRequired,
    })
  ),
};

export default DoctorList;