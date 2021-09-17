import axios from 'axios';
import React, { useState } from 'react';
import './ButtonDelete.css';

const DELETE_USER = 'http://localhost:5000/api/users/delete/:id';

const ButtonDelete = () => {
  // Hooks
  // - local state
  const [deleteUser, setDeleteUser] = useState([]);

  // custom functions
  const deleteUserBasedOnID = (id) => {
    axios.delete(DELETE_USER + id).then((response) => {
      setDeleteUser(response.data);
      console.log(response.data);
      console.log(deleteUser);
    });
  };

  return (
    <button onClick={deleteUserBasedOnID} className='delete-btn'>
      Ištrinti vartotoją
    </button>
  );
};

export default ButtonDelete;
