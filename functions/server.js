const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const serverless = require("serverless-http");
const path = require('path');

const app = express();
const router = express.Router();

// URL de conexión a MongoDB
const url = 'mongodb+srv://userdb:abc123.@clustergalaxy.hdklzaq.mongodb.net/?retryWrites=true&w=majority';
const dbName = 'galaxy';
let db;

// Configuración de MongoDB
async function connectToDatabase() {
    try {
        const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        db = client.db(dbName);
        console.log('Connected to database');
    } catch (error) {
        console.error('Error connecting to database:', error);
        process.exit(1); // Exit if unable to connect to the database
    }
}

// Llama a la función de conexión cuando la aplicación se inicia
connectToDatabase();

// Habilita CORS
app.use(cors());

// Define las rutas
router.get("/", (req, res) => {
    res.send("App is running..");
});

router.get('/gamestart', (req, res) => {
    res.sendFile(path.join(__dirname, 'gamestart.html'));
});

// Define las rutas para datos de la base de datos
router.get('/systems', async (req, res) => {
    try {
        const collection = db.collection('system');
        const systems = await collection.find({}).toArray();
        res.json(systems);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/planets/solar-cluster', async (req, res) => {
    try {
        const collection = db.collection('planet');
        const planets = await collection.find({ system: 'solar-cluster' }).toArray();
        res.json(planets);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/planets/trebia-cluster', async (req, res) => {
    try {
        const collection = db.collection('planet');
        const planets = await collection.find({ system: 'trebia-cluster' }).toArray();
        res.json(planets);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/planets/citadel-cluster', async (req, res) => {
    try {
        const collection = db.collection('planet');
        const planets = await collection.find({ system: 'citadel-cluster' }).toArray();
        res.json(planets);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Usa el router en la ruta de funciones de Netlify
app.use("/.netlify/functions/server", router);

// Exporta la aplicación como una función serverless
module.exports.handler = serverless(app);
