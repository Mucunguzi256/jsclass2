const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded());
app.listen(PORT, () => console.log(`Running express server on Port ${PORT}!`));

const blogList = [
  {
    title: 'Making a fortune',
    year: 2021,
  },
  {
    title: 'Making a whipper',
    year: 2022,
  },
  {
    title: 'Making a man',
    year: 2023,
  },
];
app.get(
  '/blog',
  (req, rep, next) => {
    console.log('Before handling the request');
  },
  (req, res) => {
    res.send(blogList);
    next();
  }
);

app.post('/blog', (req, res) => {
  console.log(req.body);
  blogList.push(req.body);
  res.sendStatus(201);
});
