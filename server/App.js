const express = require("express");
const cors = require("cors");
const morgan = require('morgan');
const path =  require("path");

const db = require("./Database");
const routes = require("./routes/rutas.js");

const app = express();

app.set('port', process.env.PORT || 5000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//Routes
app.use("/api/rutas", routes);

// Static Files
app.use(express.static(path.resolve("public")));

app.use('/api', (req, res) => {
    res.send("Hello world");
});


db();

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

module.exports = app;