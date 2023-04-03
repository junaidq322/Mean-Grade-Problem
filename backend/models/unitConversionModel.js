const mongoose = require('mongoose');

const unitConversionSchema = mongoose.Schema({
    inputUnit: String,
    targetUnit: String,
    inputNumericalValue: Number,
    authoritativeAnswer: Number
});

// Define the unit conversion problem model
module.exports = mongoose.model('UnitConversion', unitConversionSchema);
