import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Users.css';
import ButtonDelete from './ButtonDelete';

const GET_ALL_USERS = 'http://localhost:5000/api/users';

const Users = () => {
  // Hooks
  // - local state
  const [users, setUsers] = useState([]);

  // - side effects
  useEffect(() => {
    axios.get(GET_ALL_USERS).then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <main>
      <section>
        <h2 className='section-name'>Visi vartotojai</h2>
        <div className='users-cards'>
          {users.map((item) => (
            <div className='card_shadow' key={item._id}>
              <p>Vardas: {item.name}</p>
              <p>Amžius: {item.age}</p>
              <p>El. paštas: {item.email}</p>
              <p>Slaptažodis: {item.password}</p>
              <ButtonDelete />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Users;
