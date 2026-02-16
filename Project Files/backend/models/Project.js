const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  clientId: String,
  title: String,
  description: String,
  budget: Number,
  skills: [String],
  status: {
    type: String,
    default: "Available"
  }
}, { timestamps: true });

module.exports = mongoose.model("Project", projectSchema);
