const mongoose = require("mongoose");

const FilmeSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Por favor coloque um nome para seu filme"]
        },
        director: {
            type: String,
            required: true
        },
        release_date: {
            type: String,
            required: true
        },
        synopsis: {
            type: String,
            required: true
        },
        poster_url: {
            type: String,
            required: true
        }
    }
);

const Filme = mongoose.model("Filme", FilmeSchema);

module.exports = Filme;
