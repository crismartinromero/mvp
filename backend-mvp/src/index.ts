// src/index.ts
import express from 'express';

const app = express();
const port = 4000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Allow requests from this origin
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Allow these HTTP methods
  res.header('Access-Control-Allow-Headers', 'Content-Type'); // Allow these headers

  // Allow credentials (if needed)
  res.header('Access-Control-Allow-Credentials', 'true');

  if (req.method === 'OPTIONS') {
    // Handle preflight requests
    res.sendStatus(200);
  } else {
    next();
  }
});

app.get('/', (req, res) => {
  console.log('Llegué al back')
  res.send({data:'Hello, World! Cómo estás? Todo bien?'});
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

