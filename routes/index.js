var express = require('express');
var router = express.Router();
 var userModel = require("./users");
  
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('This is the learning routes of express js and mongodb');
});

router.get('/create', async function(req, res) {
        var createduser =  await userModel.create({
            username:"raushankr",
            name:"raushanm",
            age:34
          })
          res.send("ban gaya database")
});
router.get('/users', async function(req, res) {
  var createduser =  await userModel.create({
      username:"satyam@12",
      name:"satyam shukla",
      age:355
    })
    res.send("ban gaya satyam ka data")
});
// router.get('/allusers',async function(req,res){
//         let all 
// })

module.exports = router;
