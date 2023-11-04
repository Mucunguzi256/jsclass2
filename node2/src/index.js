const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded());
app.use((req, res, next) => {
  console.log(`${req.method}:${req.url}`);
  next();
});

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

app.get('/blog', (request, response) => {
  const { title } = req.params;
  const blogList = bloglist.find(b => b.title === title);
  response.send(blogList);
});

app.get('/blog/:title', (req, res) => {
  console.log(req.params.title);
  res.sendStatus(200);
});

app.post('/blog', (req, res) => {
  console.log(req.body);
  blogList.push(req.body);
  res.sendStatus(201);
});
