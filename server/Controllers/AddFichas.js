const Ficha = require("../Models/Ficha");

const AddFichas = async (req, res) => {
    try {
        const {nombre, rut, edad, nacimiento, direccion, comuna, telefono, prevision, fecha, hora, diagnostico, categoria} = req.body;

        const addFichas = new Ficha({
            nombre, 
            rut, 
            edad, 
            nacimiento, 
            direccion, 
            comuna, 
            telefono, 
            prevision,
            activa: true,
            fecha,
            hora,
            diagnostico,
            categoria,
        });

        await addFichas.save();

        console.log(addFichas);

        res.json(addFichas);
    }
    catch (error) {
        console.log("Dejaste la caga", error);
        res.json({ error: "Error al agregar la ficha medica"});
    }
};

module.exports = AddFichas;