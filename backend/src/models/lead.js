const { Schema, model } = require('mongoose');

// register a new lead and qualify it

const leadSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    avatar: String,
    projectArea: String,
    phone: {
        type: String,
        required:true,
    },
    role: String,
    howItArrived: String,
    decisionMaker: Boolean,
    knowsAboutCPE: Boolean,
    numberOfEmployees: Number,
    segment: String,
    responsible: String,
}, {
    timestamps:true,
});

module.exports = model('Lead', leadSchema);