const mongoose = require("mongoose");

const SkillSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  image: String,
  relevantUsers: {
    type: [mongoose.ObjectId],
    default: [],
    required: true
  },
  group: {
    type: String,
    required: true
  },
  description: String 
});

SkillSchema.index({ title: "text" });
const Skill = mongoose.model("Skill", SkillSchema);
module.exports = { Skill };
