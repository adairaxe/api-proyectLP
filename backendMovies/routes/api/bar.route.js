const router = require("express").Router();

const Bar = require('../../models/bar.model');

//Se coloca el async porque todos los metodos de mongoose usan promesas
router.get("/", async (req, res) => {
    try{
        const bares = await Bar.find();
        res.json(bares);
    }catch(error){
        res.status(200).json({error: "Ha fallado"});
    }
});

router.get("/:barName", async (req, res) => {
    try{
        const bar = await Bar.find({
            name: req.params.barName
        });
        res.json(bar);
    }catch(error){
        res.status(500).json({error: "Ha fallado al inserccion"});
    }
});

router.post("/", async (req, res) => {
    try{
        const newBar = await Bar.create(req.body);
        res.json(newBar);
    }catch(error){
        res.status(500).json({error: "Ha fallado al inserccion"});
    }
});

router.put("/:barId", async (req, res) => {
    try{
        const barUpdated = await Bar.findByIdAndUpdate(
            req.params.barId , req.body , {new : true}
        );
        res.json(barUpdated);
    }catch(error){
        res.status(500).json({error: "Ha fallado la actualización"});
    }
});

router.delete("/:barId", async (req, res) => {
    try{
        const barDelete = await Bar.findByIdAndDelete(req.params.barId);
        res.json(barDelete);
    }catch(error){
        res.status(500).json({error: "Ha fallado el borrado"});
    }
})

module.exports = router;