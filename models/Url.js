const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  originalUrl: {
    type: String,
    required: true,
  },
  alias: {
    type: String,
    required: true,
  },
});

const Url = mongoose.model("Url", urlSchema);
module.exports = Url;
