import express, { response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import User from './models/userModel.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Middlewares
app.use(cors());
app.use(express.json());

// Connecting DB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((response) => {
    console.log(`Connected to MongoDB`);
    // Starting server
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
  });

// Routes
app.get('/', (req, res) => res.send('API is running...'));

// GET: all users
app.get('/api/users', async (req, res) => {
  let users = await User.find({});

  res.json(users);
});

// POST: update user
app.post('/api/users/post', (req, res) => {
  let user = req.body;

  User.find().then((result) => {
    const userExists = result.some(
      (userFromDB) => userFromDB.email === user.email
    );

    if (userExists) {
      res.json({
        registrationStatus: 'failed',
        message: 'User with given email already exists',
      });
    } else {
      user.teams = [];

      const newUser = new User(user);

      newUser.save().then((result) => {
        let { _id } = result;
        res.json({
          registrationStatus: 'success',
          userId: _id,
        });
      });
    }
  });
});

// PUT: add new user
app.put('/api/users/add', (req, res) => {});

// DELETE: user based on id
app.delete('/api/users/delete/:id', (req, res) => {
  // const id = req.params._id;
  let { userID } = req.body;

  let user = User.findById(userId);
  let userToDeleteIndex = user.users.findIndex(
    (user) => '' + user._id === '' + userID
  );
  console.log(userToDeleteIndex);
  // user.user.splice(userToDeleteIndex, 0);

  console.log('hello');
  User.findByIdAndUpdate(userID, user).then((result) => res.json(user));
});
