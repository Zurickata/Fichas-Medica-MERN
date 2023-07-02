const { model, Schema } = require("mongoose");

const UsuarioSchema = new Schema({
  nombre: { type: String, required: true },
  rol: {type: String, required: false},
  correo: { type: String, required: true, unique: true },
  contraseña: { type: String, required: true },
});

module.exports = model("Usuario", UsuarioSchema);