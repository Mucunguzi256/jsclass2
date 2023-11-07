const express = require('express');
const blogRoute = require('./routes/blogs');
const sourceRoute = require('./routes/source');

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded());
app.use((req, res, next) => {
  console.log(`${req.method}:${req.url}`);
  next();
});

app.use(blogRoute);
app.use(sourceRoute);
app.listen(PORT, () => console.log(`Running express server on Port ${PORT}!`));
