const Ficha = require("../Models/Ficha");

const getFichasActivas = async (req, res) => {
    const fichas = await Ficha.find({activa: true});

    if (fichas) {
        res.json(fichas);
    }
    else {
        res.json({mensaje: "No hay Fichas Activas"});
    }
};

module.exports = getFichasActivas;