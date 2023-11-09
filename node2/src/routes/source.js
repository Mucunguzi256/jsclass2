const { Router } = require('express');
const router = Router();

const blogSource = [
  {
    outlet: 'New Vision',
  },
  {
    outlet: 'Daily Monitor',
  },
  {
    outlet: 'New Nation',
  },
  {
    outlet: 'Observer',
  },
];

router.get('/source', (req, res) => {
  res.send(blogSource);
});

module.exports = router;
