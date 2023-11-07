const { Router } = require('express');
const router = Router();

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
router.get('/blog', (req, res) => {
  const { title } = req.params;
  const blogList = bloglist.find(b => b.title === title);
  response.send(blogList);
});

router.get('/blog/:title', (req, res) => {
  console.log(req.params.title);
  res.sendStatus(200);
});

router.post('/blog', (req, res) => {
  console.log(req.body);
  blogList.push(req.body);
  res.sendStatus(201);
});

module.exports = router;
