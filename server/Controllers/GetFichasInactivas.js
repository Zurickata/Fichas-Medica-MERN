const Ficha = require("../Models/Ficha");

const getFichasInactivas = async (req, res) => {
    const fichas = await Ficha.find({activa: false});

    if (fichas) {
        res.json(fichas);
    }
    else {
        res.json({mensaje: "No hay Fichas Antiguas"});
    }
};

module.exports = getFichasInactivas;