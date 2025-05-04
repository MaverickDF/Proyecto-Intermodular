const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");

app.set("port", process.env.PORT || 8080);
app.set("json spaces", 2);

app.use(express.urlencoded({extended: false}));
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.listen(app.get("port"), leerPuerto());

function leerPuerto() {
  console.log(`Hola desde el puerto: ${app.get("port")}`);
}

app.use(require("./routes/index"));
