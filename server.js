const express = require('express');
const app = express();

const PORT = 3000;

// app.use('/site', express.static('labyrinth'));

// app.get('/*', (req, res) => {

//   res.send(`<h1>Hello, World! ${req.url} </h1>`);
// });

// app.set('view engine', 'pug');
// app.set('views', './views');

// app.get('/about', (req, res) => {
//   res.render('about.pug', {title: 'about', message: 'Hey! This view was created on server using pug view engine!'})
// });


const users = [
  {
    id: 1,
    name: 'Anton',
  },
  {
    id: 2,
    name: 'Kate',
  },
  {
    id: 3,
    name: 'Ivan',
  },
  {
    id: 4,
    name: 'Abdula',
  },
];

app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/users/:id', (req, res) => {
  const userId = Number(req.params['id']);
  const user = users.find(user => user.id === userId);
  res.json(user);
});

const bodyParser = require('body-parser');
const loggerMiddleware = require('./logger.middleware');

app.post('/users', loggerMiddleware, bodyParser.json(), (req, res) => {
  users.push(req.body);
  res.status(201);
  res.json(req.body);
});

app.put('/users/:id', bodyParser.json(), (req, res) => {

  
  res.json(req.body);
});

app.delete('/users/:id', (req, res) => {

  
  res.json();
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
