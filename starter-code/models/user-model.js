const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: { type: String, required: true, unique: true, minlength: 2, },
  encryptedPassword: { type: String, required: true },
}, {
  timestamps: true,
});

const User = mongoose.model("User", userSchema);

module.exports = User;