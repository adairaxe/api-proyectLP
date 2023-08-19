const request = require("supertest");
const app = require("../../app");
const mongoose = require("mongoose");
const Bar = require('../../models/bar.model');

describe("Pruebas sobre la api dbbares" , () => {

    beforeEach(async() => {
        await mongoose.connect("mongodb://127.0.0.1/dbbares");
    });

    afterAll(async() => {
        await mongoose.disconnect();
    });
    
    describe("GET /api/bares", () => {

        let response;
        beforeEach(async () => {
            response = await request(app).get("/api/bares").send();
        });
        
        it("La ruta funciona", async () => {
            expect(response.status).toBe(200);
        });

        it("La ruta recibe un json", async () => {
            expect(response.headers["content-type"]).toContain("json");
        })

        it("La peticion nos devuelve un array de bares", async () => {
            expect(response.body).toBeInstanceOf(Object);
            console.log(response);
        });
    });



    describe("POST /api/bares", () => {

        let response;
        let newBar = {
            name: "Emapanadas de nico", 
            ubication: "puerto-azul", 
            menu: [
                { name: "Hamburguesa Clásica", price: 8.99 } , 
                { name: "Papas", price: 8.49 }
            ], 
            poster: [
                { namePhoto: "Fachada", url: "url_fachada.jpg" },
                { namePhoto: "Interior", url: "url_interior.jpg" }
            ]
         
        };

        beforeEach(async () => {
            response = await request(app).post("/api/bares").send(newBar);
        });

        afterAll(async () => {
            await Bar.deleteMany({name: "Emapanadas de nico"});
        });

        it("La ruta funciona" , async () => {
            expect(response.status).toBe(200);
        });

        it("La ruta recibe un json", async () => {
            expect(response.headers["content-type"]).toContain("json");
        });

        it("Inserccion exitosa", async () => {
            expect(response.body._id).toBeDefined();
            expect(response.body.name).toBe(newBar.name);
        });

        it("Inserccion fallida", async () => {
            const wrongBar = {name: "noExiste"}
            response = await request(app).post("/api/bares").send(wrongBar);
            expect(response.status).toBe(500);
            expect(response.body.error).toBeDefined();
        });
    });

    describe("PUT /api/bares", () => {
        let response;
        let bar;
    
        let newBar = {
            name: "Empanadas de Nico",
            ubication: "nueva-ubicacion",
            menu: [
                { name: "Pizza Margherita", price: 10.99 },
                { name: "Cerveza Artesanal", price: 5.49 }
            ],
            poster: [
                { namePhoto: "Fachada", url: "nueva-url-fachada.jpg" },
                { namePhoto: "Interior", url: "nueva-url-interior.jpg" }
            ]
        };

        beforeEach(async () => {
            // Crear un bar para luego actualizarlo
            bar = await Bar.create(newBar);
            response = await request(app).put(`/api/bares/${bar._id}`).send({ubication: "duran-primavera2"});
        });

        afterEach(async () => {
            await Bar.findByIdAndDelete(bar._id);
        });
    
        it("La ruta funciona", async () => {
            expect(response.status).toBe(200);
        });
    
        it("La ruta recibe un json", async () => {
            expect(response.headers["content-type"]).toContain("json");
        });
    

        it("Se actualiza correctamente", async () => {
            expect(response.body.ubication).toBe("duran-primavera2")
        });
    });



    describe("DELETE /api/bares", () => {
        
        let bar;
        let response;
        
        let newBar = {
            name: "Interestelar", 
            ubication: "puerto-azul", 
            menu: [
                { name: "Hamburguesa Clásica", price: 10.99 } , 
                { name: "Ensalada César", price: 8.49 }
            ], 
            poster: [
                { namePhoto: "Fachada", url: "url_fachada.jpg" },
                { namePhoto: "Interior", url: "url_interior.jpg" }
            ]
        };

        beforeEach(async () => {
            bar = await Bar.create(newBar);
            response = await request(app).delete(`/api/bares/${bar._id}`).send();
        });
        
        it("La ruta funciona", async () => { 
            expect(response.status).toBe(200);
        });

        it("La ruta recibe un json", async () => {
            expect(response.headers["content-type"]).toContain("json");
        });

        it("Se borra correctamente", async () => {
            console.log(bar._id);
            const foundBar = await Bar.findById(bar._id);
            expect(foundBar).toBeNull();
        });
    });

});