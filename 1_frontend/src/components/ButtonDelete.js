import axios from 'axios';
import React, { useState, useEffect } from 'react';

const GET_ALL_USERS = 'http://localhost:5000/api/users';
const DELETE_USER = 'http://localhost:5000/api/users/delete/:id';

const ButtonDelete = () => {
  // Hooks
  // - local state
  const [deleteUser, setDeleteUser] = useState([]);

  // custom functions
  const deleteUserBasedOnID = (_id) => {
    axios.get(GET_ALL_USERS).then((response) => {
      setDeleteUser([response.data._id]);
      console.log([response.data._id]);
    });
  };

  return <button onClick={deleteUserBasedOnID}>Ištrinti vartotoją</button>;
};

export default ButtonDelete;
