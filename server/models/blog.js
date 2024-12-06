const Mongoose = require("mongoose");

const { Schema } = Mongoose;

const BlogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },

  created: {
    type: Date,
    default: Date.now,
  },

  updated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Mongoose.model("BlogSchema", BlogSchema);
