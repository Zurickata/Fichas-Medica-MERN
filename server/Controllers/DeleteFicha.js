const Ficha = require('../Models/Ficha');

const DeleteFicha = async (req, res) => {
    try {
        const fichaId = req.params.id;
        const ficha = await Ficha.findByIdAndUpdate(fichaId, { activa: false }, { new: true });

        if (!ficha) {
        return res.json({ mensaje: 'Ficha no encontrada' });
        }

        res.json(ficha);
    } 
    catch (error) {
        console.log("Dejaste la caga", error);
        res.json({ error: "Error al dar de alta la ficha medica"});
    }
};

module.exports = DeleteFicha;