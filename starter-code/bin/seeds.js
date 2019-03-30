const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost//basic-auth");

const User = require("../models/User");

const users = [{
    username: "d_stm@hotmail.com",
    password: "canelo"
}];

User.create(users, function (err, result){
    if(err) console.log("try again");
    console.log("ya quedo", result);
});