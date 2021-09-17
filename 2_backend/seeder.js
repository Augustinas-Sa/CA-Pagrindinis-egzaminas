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
    let users = {
      name: 'Tom',
      age: 30,
      email: 'tom@email.com',
      password: 'aa',
    };

    User.insertMany(users);

    console.log('Data sended to MongoDB');
  });
