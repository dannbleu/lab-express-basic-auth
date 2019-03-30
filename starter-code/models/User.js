const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: "Ya existe este username",
      required: "Debes mandar el usuario"
    },
    password: {
      type: String,
      trim: true,
      required: "debes mandar la contrase/na"
    }
  }, 
  {timestamps: true}
);

module.exports = mongoose.model("user", userSchema)