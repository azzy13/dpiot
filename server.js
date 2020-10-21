import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db.js';
import colors from 'colors';

dotenv.config();

connectDB();

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold,
  ),
);
