const { Router } = require("express");
const router = Router();
const OpenAI = require("openai");

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
  console.log("Alguien accede a ruta2");
  res.send("Hola desde rutaGet2");
});

router.get("/rutaGetJSON", function (req, res) {
  console.log("Alguien accede a ruta JSON");
  res.json({
    saludo: "Hola desde un JSON",
  });
});

router.post("/rutaPOST", function (req, res) {
  console.log("Alguien accede a rutaPost");
  // res.send("Hola desde rutaPost")
  res.send("Hola desde RutaPost")
  // res.json({
  //   id: "001",
  //   nombre: req.body.nombre,
  //   apellido: req.body.apellido,
  //   correo: req.body.correo,
  //   edad: req.body.edad,
  //   correo: req.body.correo,
  })
  // res.redirect("http://127.0.0.1:5500/index.html");


router.post("/rutaPOST2", function (req, res) {
  console.log("Alguien accede a rutaPost2");
  res.send("Hola desde rutaPost2")
});

router.post("/rutaPOST3", function (req, res) {
  console.log("Alguien accede a rutaPost3");
  res.send("Hola desde rutaPost3")
});

router.post("/rutaPOST4", function (req, res) {
  console.log("Alguien accede a rutaPost4");
  res.send("Hola desde rutaPost4")
});

router.post("/rutaPOST5", function (req, res) {
  console.log("Alguien accede a rutaPost5");
  res.send("Hola desde rutaPost5")
});

router.post("/rutaPOST_AI", (req, res) => {
const openai = new OpenAI({
  apiKey: req.body.OPENAI_API_KEY, });
  const role = req.body.role || "developer";
  const question = req.body.pregunta || "";

  const completion = openai.chat.completions.create({
    model: "gpt-4o-mini",
    store: true,
    messages: [
      {
        role: role,
        content: "Eres un ordenador malote" + question,
      },
    ],
  });

  completion.then((result) => { 
    res.send(result.choices[0].message);
  });
});

module.exports = router;
