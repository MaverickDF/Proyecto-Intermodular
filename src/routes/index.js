const { Router } = require("express");
const router = Router();

router.get("/", function (req, res) {
  console.log("Alguien accede al servidor");
  res.send("Hola desde index");
});
router.get("/rutaGet", function (req, res) {
  console.log("Alguien accede a rutaGet");
  res.send("Hola desde rutaGet");
});
router.get("/rutaGet1", function (req, res) {
  console.log("Alguien accede a ruta1");
  res.send("Hola desde rutaGet1");
});
router.get("/rutaGet2", function (req, res) {
  console.log("Alguien accede a ruta1");
  res.send("Hola desde rutaGet2");
});

router.get("/rutaGetJSON", function (req, res) {
  console.log("Alguien accede a ruta JSON");
  res.json({
    saludo: "Hola desde un JSON",
  });
});

module.exports = router;
