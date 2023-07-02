const getFichasActivas = require("./GetFichasActivas");
const getFichasInactivas = require("./GetFichasInactivas");
const addFichas = require("./AddFichas");
const getUserById = require("./GetUserById");
const login = require("./Login");
const register = require("./Register");
const deleteFicha = require("./DeleteFicha");

module.exports = {
    getFichasActivas,
    getFichasInactivas,
    addFichas,
    getUserById,
    login,
    register,
    deleteFicha
};