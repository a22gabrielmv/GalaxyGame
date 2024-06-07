const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const serverless = require("serverless-http");
const path = require('path');

const app = express();
const router = express.Router();

const url = 'mongodb+srv://userdb:abc123.@clustergalaxy.hdklzaq.mongodb.net/?retryWrites=true&w=majority';
const dbName = 'galaxy';
let db;

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(client => {
        db = client.db(dbName);
        console.log('Connected to database');
    })
    .catch(error => {
        console.error('Error connecting to database:', error);
        process.exit(1); // Exit if unable to connect to the database
    });

// Habilita CORS
app.use(cors());

router.get("/", (req, res) => {
    res.send("App is running..");
});

// Endpoint para obtener los sistemas estelares
router.get('/systems', (req, res) => {
    const collection = db.collection('system');
    collection.find({}).toArray()
        .then(systems => res.json(systems))
        .catch(error => res.status(500).send(error));
});

// Endpoint para obtener los planetas del sistema 'solar-cluster'
router.get('/planets/solar-cluster', (req, res) => {
    const collection = db.collection('planet');
    collection.find({ system: 'solar-cluster' }).toArray()
        .then(planets => res.json(planets))
        .catch(error => res.status(500).send(error));
});

// Endpoint para obtener los planetas del sistema 'trebia-cluster'
router.get('/planets/trebia-cluster', (req, res) => {
    const collection = db.collection('planet');
    collection.find({ system: 'trebia-cluster' }).toArray()
        .then(planets => res.json(planets))
        .catch(error => res.status(500).send(error));
});

// Endpoint para obtener los planetas del sistema 'citadel-cluster'
router.get('/planets/citadel-cluster', (req, res) => {
    const collection = db.collection('planet');
    collection.find({ system: 'citadel-cluster' }).toArray()
        .then(planets => res.json(planets))
        .catch(error => res.status(500).send(error));
});

// Endpoint para cargar la página de inicio
router.get('/gamestart', (req, res) => {
    res.sendFile(path.join(__dirname, 'gamestart.html'));
});

// Define una ruta para redirigir a gamestart.html
router.get("/redirect-to-gamestart", (req, res) => {
    if (db) {
        // Si la base de datos está conectada, redirige a gamestart.html
        res.sendFile(path.join(__dirname, 'gamestart.html'));
    } else {
        res.status(500).send('Database connection not established.');
    }
});

app.use("/.netlify/functions/server", router);

module.exports.handler = serverless(app);
