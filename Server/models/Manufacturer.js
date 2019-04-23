const mongoose = require('mongoose');

const manufacturerSchema = new mongoose.Schema({
    name:{type: mongoose.Schema.Types.String},
    claims:[{type: mongoose.Schema.Types.ObjectId, ref:"Claim"}],
    email:{type: mongoose.Schema.Types.String}
});

const Manufacturer = mongoose.model("Manufacturer", manufacturerSchema);

module.exports = Manufacturer;