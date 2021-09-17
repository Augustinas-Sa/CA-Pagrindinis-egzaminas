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
