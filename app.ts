import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import multer from 'multer';
import { connectDb } from './src/helpers/db';

// Load environment variables
dotenv.config();

const app: Application = express();

// Middleware setup
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(
  cors({
    exposedHeaders: [
      'date',
      'content-type',
      'content-length',
      'connection',
      'server',
      'x-powered-by',
      'access-content-allow-origin',
      'authorization',
      'x-final-url',
    ],
    allowedHeaders: ['content-type', 'accept', 'authorization', 'secretkey'],
  })
);

app.use(multer().any());

// Connect to database
connectDb();

// Define a basic route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
