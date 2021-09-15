// Requiring packages
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import fetch from 'node-fetch';

dotenv.config();

const app = express();

const PORT = process.env.PORT;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
// - GET method
// app.get('/api/jokes/', (req, res) => {
//   fetch('https://api.chucknorris.io/jokes/random')
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data.value);
//     });
// });

app.get('/api/jokes/', async (req, res) => {
  const response = await fetch('https://api.chucknorris.io/jokes/random');
  const data = await response.json();

  console.log(data.value);
});

// app.get('/api/jokes/:category', (req, res) => {
//   fetch('https://api.chucknorris.io/jokes/categories')
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//     });
// });

app.get('/api/jokes/:category', async (req, res) => {
  const response = await fetch('https://api.chucknorris.io/jokes/categories');
  const data = await response.json();

  console.log(data);
});

// Starting server
app.listen(PORT, () => console.log(`Server is runing on port ${PORT}...`));
