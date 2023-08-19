const mongoose = require("mongoose");
const Bar = require("../models/bar.model");

(async () => {
    await mongoose.connect("mongodb://127.0.0.1/dbbares");
    const newBar = await Bar.create({
        name: "Pez-azul", 
        ubication: "puerto-azul", 
        menu: [
            { name: "Hamburguesa Clásica", price: 8.99 } , 
            { name: "Papas", price: 8.49 }
        ], 
        poster: [
            { namePhoto: "Fachada", url: "url_fachada.jpg" },
            { namePhoto: "Interior", url: "url_interior.jpg" }
        ]
     
    });

    console.log(newBar);
})();

