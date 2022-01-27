const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const homeSchema = new Schema(
    {
        imageMain: { type: String, require: false },
        text: { type: String, require: false },
        logo1: { type: String, require: false },
        logo2: { type: String, require: false },
        logo3: { type: String, require: false },
        logo4: { type: String, require: false },
        
    },
    {
        timestamps: true
    }
);

const Home = mongoose.model('home', homeSchema)
module.exports = Home