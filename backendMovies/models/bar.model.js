const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/* const dishSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true }
});

const photoSchema = new Schema({
    namePhoto: { type: String, required: true },
    url: { type: String, required: true }
}); */

const barSchema = new Schema({
    name: { type: String, required: true },
    ubication: { type: String, required: true },
    menu: { type: Schema.Types.Mixed },
    poster: { type: Schema.Types.Mixed }
});

module.exports = mongoose.model("bar" , barSchema);
