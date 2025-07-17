const express = require("express");
const app = express();
app.use(express.json());

let location = null;

app.post("/set-location", (req, res) => {
  location = req.body;
  res.send({ status: "ok", message: "Position enregistrée" });
});

app.get("/get-location", (req, res) => {
  res.send(location || { message: "Aucune position enregistrée." });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serveur en ligne sur le port ${PORT}`));
