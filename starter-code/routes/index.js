const express = require('express');
const router  = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);

router.get("/signup", (req, res) => {
  res.render("signup-form", {error: null});
});
router.post("/signup", (req, res) => {
    if(req.body.pswd2 !== req.body.pswd){
      return res.render("signup-form", {error: "Incorrect Password"})
      };

  User.findOne({username:req.body.username}, (err,doc) => {
    if (doc) {
      return res.render("signup-form", {error: "This email is already in use"})
    }
  });

  const hash = bcrypt.hashSync(req.body.pswd, salt);
  const user = new User({
    username: req.body.username,
    password: hash
  });
  user.save((err, result) => {
    if(!err){
      return res.redirect("/");
    }
  });
});

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;