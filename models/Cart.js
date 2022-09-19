const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: String,
  },
  products: {
    type: [],
    required: true
  },
});

const shopping = mongoose.model("shopping", cartSchema);
module.exports = shopping;
