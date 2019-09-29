const { Schema, model } = require('mongoose');

// register a new lead and qualify it

const leadSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    avatar: {
        type: String,
        default: 'https://myrealdomain.com/images/empty-profile-picture-4.gif'
    },
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
    details: String,
    status: {
        type: String,
        enum: ['Não iniciado', 'Retornar', 'Em progresso', 'Cancelado'],
        default: 'Não iniciado'
      }
}, {
    timestamps:true,
});

module.exports = model('Lead', leadSchema);