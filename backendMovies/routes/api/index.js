const router = require("express").Router();

router.use("/bares", require("./bar.route"));

module.exports = router;