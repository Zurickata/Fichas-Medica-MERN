const { model, Schema } = require("mongoose");

const FichaSchema = new Schema({
    nombre: {type: String, requiered: true},
    rut: {type: String, required: true},
    edad: {type: Number},
    nacimiento: {type: Date},
    direccion: {type: Date},
    comuna: {type: String},
    telefono: {type: Number},
    prevision: {type: String},
    activa: {type: Boolean},
    fecha: {type: String, default: Date.toLocaleDateString},
    hora: {type: String, default: Date.toLocaleTimeString},
    diagnostico: {type: String},
    categoria: {type: String},
});

module.exports = model("Ficha", FichaSchema);