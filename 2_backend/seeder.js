import mongoose from 'mongoose';
import User from './models/userModel.js';
import dotenv from 'dotenv';

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((response) => {
    let users = [
      {
        name: 'Tomas',
        age: 30,
        email: 'tomas@email.com',
        password: 'tt',
      },
      {
        name: 'Augustinas',
        age: 30,
        email: 'augustinas@email.com',
        password: 'aa',
      },
      {
        name: 'Rasa',
        age: 21,
        email: 'rasa@email.com',
        password: 'rr',
      },
    ];

    User.insertMany(users);

    console.log('Data sended to MongoDB');
  });
