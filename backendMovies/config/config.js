const mongoose = require("mongoose");

const dbConnection = mongoose.connect("mongodb://127.0.0.1/dbbares")
    .then(() => {
        console.log('Conexión exitosa a MongoDB');
    })
    .catch(err => {
        console.error('Error al conectar a MongoDB:', err);
    });
    

module.exports = dbConnection