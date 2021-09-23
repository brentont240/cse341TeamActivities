//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();
 
const names = ['peter', 'james', 'john'];
 
router.get('/', (req, res, next) => {
  res.render('pages/ta02', {
    title: 'Team Activity 02',
    path: '/ta02', // For pug, EJS
    users: names
  });
});
 
router.post('/addUser', (req, res, next) => {
  names.push(req.body.username);
  res.redirect('/ta02');
});

router.post('/removeUsername', (req, res, next) => {
  for (let i = 0 ; i < names.length; i++){
    if(names[i] == req.body.removeUsername )
      names.splice(i,1);
  };
  res.redirect('/ta02');
});

 
module.exports = router;