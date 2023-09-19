const mongoose = require('mongoose');
const candidateSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  mobile: {
    type: String,
  },
  dob: {
    type: String, 
  },
  experience: {
    type: String, 
  },
  resume: {
    type: String,
  },
  location: {
    type: String,
  },
  address: {
    type: String,
  },
  currentEmployer: {
    type: String,
  },
  currentDesignation: {
    type: String,
  },
});

const Candidate = mongoose.model('Candidate', candidateSchema);
module.exports = Candidate;
