const crypto = require('crypto');
const Usuario = require("../Models/usuario");

const login = async (req, res) => {
    const { correo, contraseña } = req.body;

    const usuario = await Usuario.findOne({ correo: correo});

    if(!usuario){
        console.log("Usuario no encontrado");
        res.json({ mensaje: "Usuario no encontrado"});
    }

    const hash = crypto.createHash('sha256');
    hash.update(contraseña);
    const contraseñaIngresada = hash.digest('hex');

    if (contraseñaIngresada === usuario.contraseña) {
        console.log("Inicio de Sesión Exitoso");
        res.json(usuario);
    }
    else {
        console.log("Inicio de Sesión Fallido");
    }

};

module.exports = login;