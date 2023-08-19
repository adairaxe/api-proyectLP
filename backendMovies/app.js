const express = require("express");
const cors = require("cors");
const connectiondb = require("./config/config");
const app = express();

//configuración de express
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended: true}));

app.get("/" , (req,res) => {
    res.send("Todo okay");
});

app.use(require("./routes/indexGlobal"));

module.exports = app;