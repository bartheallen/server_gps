const express = require("express");
const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.json());

let location = null;

// Route POST pour envoyer la position
app.post("/set-location", (req, res) => {
  location = req.body;
  res.send({ status: "ok", message: "Position enregistrée" });
});

// Route GET pour récupérer la position
app.get("/get-location", (req, res) => {
  res.send(location || { message: "Aucune position enregistrée." });
});

// 🚨 CECI EST LA BONNE LIGNE POUR RENDER :

app.listen(PORT, () => console.log(`Serveur en ligne sur le port ${PORT}`));
