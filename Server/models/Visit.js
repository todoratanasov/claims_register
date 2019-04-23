const mongoose = require('mongoose');

const visitSchema = new mongoose.Schema({
    user:{type: mongoose.Schema.Types.ObjectId, ref: "User"},
    claim:{type: mongoose.Schema.Types.ObjectId, ref: "Claim"},
    description:{type: mongoose.Schema.Types.String},
    closed: {type: mongoose.Schema.Types.Boolean, default:false},
    address: {type: mongoose.Schema.Types.String}
});

const Visit = mongoose.model("Visit", visitSchema);

module.exports = Visit;