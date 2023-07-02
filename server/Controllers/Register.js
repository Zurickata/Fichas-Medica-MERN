const crypto = require('crypto');
const Usuario = require("../Models/usuario");

const register = async (req, res) => {
    try {
        const { nombre, rol, correo, contraseña } = req.body;

        const usuario = await Usuario.findOne({ correo: correo });

        if (usuario){
            console.log("Ya existe un usuario con ese correo", usuario);
            res.json({ mensaje: "Ya existe un usuario con ese correo" });
        }
        else if (!nombre || !rol || !correo || !contraseña) {
            console.log("Falta el nombre / rol / correo / contraseña");
            res.json({ mensaje: "Falta el nombre / rol / correo / contraseña" });
        }
        else {
            const hash = crypto.createHash('sha256');

            hash.update(contraseña);

            const contraseñaHasheada = hash.digest('hex');

            const nuevoUsuario = new Usuario({
                nombre,
                rol,
                correo,
                contraseña: contraseñaHasheada,
            });

            nuevoUsuario.save();

            console.log(nuevoUsuario);

            res.json(nuevoUsuario);
        }
    }
    catch (error) {
        console.log("Error al Ingresar Usuario", error);
        res.json({ error: "EError al Ingresar Usuario"});
    }
};

module.exports = register;