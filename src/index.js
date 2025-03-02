const express = require("express");
const app = express();

app.set("port", process.env.PORT || 8080);

app.use(express.urlencoded({extended: false}));

app.listen(app.get("port"), leerPuerto());

function leerPuerto() {
  console.log(`Hola desde el puerto: ${app.get("port")}`);
}

app.use(require("./routes/index"));
