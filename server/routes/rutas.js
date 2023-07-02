const express = require("express");

const { addFichas, getFichasActivas, getFichasInactivas, getUserById, login, register, deleteFicha } = require("../Controllers/index");

const router = express.Router();

//GET
router.get("/fichasActivas", getFichasActivas);
router.get("/fichasInactivas", getFichasInactivas);
router.get("/user", getUserById);

//POST
router.post("/addficha", addFichas);
router.post("/register", register);
router.post("/login", login);

//PUT
router.put("/deleteficha/:id", deleteFicha);

module.exports = router;