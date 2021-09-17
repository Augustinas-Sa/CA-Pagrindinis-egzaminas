import React, { useState } from 'react';
import axios from 'axios';
import './NewForm.css';

const ADD_USER = 'http://localhost:5000/api/users/post';

const NewForm = () => {
  // Hooks
  // - local state
  const [newName, setNewName] = useState('');
  const [newAge, setNewAge] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  // custom functions
  const addNewUser = (e) => {
    e.preventDefault();

    axios
      .post(ADD_USER, {
        name: newName,
        age: newAge,
        email: newEmail,
        password: newPassword,
      })
      .then((response) => {
        if (response.data.registrationStatus === 'failed') {
          setNewName('');
          setNewAge('');
          setNewEmail('');
          setNewPassword('');
        } else if (response.data.registrationStatus === 'success') {
          localStorage.setItem('user', response.data.userId);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <form className='new-user-form card_shadow' onSubmit={addNewUser}>
      <label htmlFor='newName'>Vartotojo vardas</label>
      <input
        type='text'
        className='form-input'
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        required
      />

      <label htmlFor='newAge'>Vartotojo amžius</label>
      <input
        type='text'
        className='form-input'
        value={newAge}
        onChange={(e) => setNewAge(e.target.value)}
        required
      />

      <label htmlFor='newEmail'>Vartotojo el. paštas</label>
      <input
        type='email'
        className='form-input'
        value={newEmail}
        onChange={(e) => setNewEmail(e.target.value)}
        required
      />

      <label htmlFor='newPassword'>Vartotojo slaptažodis</label>
      <input
        type='text'
        className='form-input'
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        required
      />

      <input
        type='submit'
        value='Pridėti nauja vartotoją'
        className='submit-btn'
      />
    </form>
  );
};

export default NewForm;
