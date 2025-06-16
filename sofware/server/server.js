// Importar los módulos necesarios
const express = require('express');
//const bodyParser = require('body-parser');
const mysql = require('mysql');
const multer = require('multer');
//const path = require('path'); // Importar el módulo path

const app = express();

let conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sofwareviveprado'
});

conexion.connect(function(error) {
    if (error) throw error;
    console.log("Conexión exitosa!");
});

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Aqui podemos poner los html, para visualizarlos en el servidor.
app.get("/", function (req, res) {
    res.render("admin");     // Note the addition of "views/" before "admin"
});

app.post("/admin", function (req, res) {
    const datos = req.body;
    
    let ubloadFotos = datos.ubloadFotos;
    let podcastName = datos.podcastName;
    let realizador = datos.realizador;
    let date = datos.date;
    let description = datos.description;

    let registrar = "INSERT INTO podcast (imagen, nombre, realizador, fecha, descripcion) VALUES ('"+ubloadFotos+"', '"+podcastName+"', '"+realizador+"', '"+date+"', '"+description+"')"

    conexion.query(registrar, function (error){
        if (error) {
            throw error;
        } else {
            console.log("Datos almacenados correctamente");
        }
    });
});

app.listen(3000, function(){
    console.log('Servidor corriendo en http://localhost:3000');
});