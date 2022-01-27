const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sailboatSchema = new Schema(
    {
        id: { type: Number, require: true },
        company: { type: String, require: true },
        model: { type: String, require: false },
        length: { type: String, require: false },
        beam: { type: String, require: false },
        engine: { type: String, require: false },
        text: { type: String, require: false },
        image: { type: String, require: false },
        image2: { type: String, require: false },
        image3: { type: String, require: false },
        image4: { type: String, require: false },
        image5: { type: String, require: false },
    },
    {
        timestamps: true
    }
);

const Sailboat = mongoose.model('sailboats', sailboatSchema)
module.exports = Sailboat