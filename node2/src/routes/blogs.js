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
    res.cookie('visited', true, {
      maxAge: 60000,
    });
    res.send(blogList);
});

router.get('/blog/:title', (req, res) => {
    console.log(req.cookies);
    const { title } = req.params;
    const blogTitle = bloglist.find(b => b.title === title);
    response.send(blogTitle);
});

router.post('/blog', (req, res) => {
  console.log(req.body);
  blogList.push(req.body);
  res.sendStatus(201);
});

module.exports = router;
