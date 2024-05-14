const express = require("express");
const mongoose = require("mongoose");
const rotaFilme = require("./routes/filme.route.js"); // Atualize o nome do arquivo de rotas
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/api/Filmes", rotaFilme) // Atualize a rota

app.get("/", (req, res) => {
    res.send("Hello from Node");
})

mongoose
  .connect(
    "mongodb+srv://pabloorocha2003:<password>@cluster0.v4obbu5.mongodb.net/" // Atualize o appName na string de conexão
  )
  .then(() => {
    console.log("Conectado ao banco de dados");
    app.listen(3000, () => {
      console.log("Servidor rodando na porta 3000");
    });
  })
  .catch(() => {
    console.log("Falha na conexão ao banco de dados!");
  });
