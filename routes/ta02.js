//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();
 
//inistialize the variables
const names = ['peter', 'james', 'john'];
// using these variables for the error messages in the stretch challenges
let nameFound = true; //this variable checks if the name exists in the array or not
let uniqueName = true; //this variable checks if the name already exists in the array or not (duplicates)

router.get('/', (req, res, next) => {
  res.render('pages/ta02', {
    title: 'Team Activity 02',
    path: '/ta02', // For pug, EJS
    users: names,
    nameFound: nameFound, //need to put all variables in here, for this to work
    uniqueName: uniqueName //need to put all variables in here, for this to work
  });
});
 
router.post('/addUser', (req, res, next) => {
  uniqueName = true; //resets the uniqueName variable
  nameFound = true; //get rid of the other error message
  for (let i = 0 ; i < names.length; i++){
    if(names[i] == req.body.username){
      uniqueName = false;
    }
  };  
  if(uniqueName){
    names.push(req.body.username);
  }
  res.redirect('/ta02');
});

router.post('/removeUsername', (req, res, next) => {
  nameFound = false; //set nameFound to false to reset it
  uniqueName = true;
  for (let i = 0 ; i < names.length; i++){
    if(names[i] == req.body.removeUsername ){
      names.splice(i,1);
      //we found the name so set nameFound to true
      nameFound = true; 
    }
  };
  res.redirect('/ta02');

});

 
module.exports = router;