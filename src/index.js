const express = require("express");
const app = express();

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), leerPuerto());

function leerPuerto() {
  console.log("Hola desde el puerto " + app.get("port"));
}
app.get("/rutaGet", function (req, res) {
  console.log("Hola desde una ruta Get");
  res.send("Hola desde una web llamada en el servidor");
});
