const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.end("Hola mundo desde node.js 22");
});

app.get("/test/1", (req, res) => {
    res.end("Hola mundo desde node.js test1");
});

app.get("/test/2", (req, res) => {
    res.end("Hola mundo desde node.js test2");
});

app.get("*", (req, res) => {
    res.end("Se encontro la ruta especificada!");
});

app.listen("3000", () => {
    console.log("servidor iniciado");
});
