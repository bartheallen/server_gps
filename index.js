const express = require("express");
const app = express();
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
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serveur en ligne sur le port ${PORT}`));
