const mongoose = require('mongoose');

const claimSchema = new mongoose.Schema({
    creator:{type: mongoose.Schema.Types.ObjectId, ref: "User"},
    product:{type: mongoose.Schema.Types.String},
    description:{type: mongoose.Schema.Types.String},
    visit:{type: mongoose.Schema.Types.ObjectId, ref: "Visit"},
    hasVisit:{type: mongoose.Schema.Types.Boolean, default:false},
    send:{type: mongoose.Schema.Types.Boolean, default:false},
    closed:{type: mongoose.Schema.Types.Boolean, default:false},
    manufacturer:{type: mongoose.Schema.Types.String},
    arrived:{type: mongoose.Schema.Types.Boolean, default:false},
    customer: {type: mongoose.Schema.Types.String},
    customerEmail:{type: mongoose.Schema.Types.String},
    date:{type: mongoose.Schema.Types.Date},

});

const Claim = mongoose.model("Claim", claimSchema);

module.exports = Claim;