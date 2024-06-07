const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const serverless = require('serverless-http');
const path = require('path');

const app = express();
const router = express.Router();

const url = 'mongodb+srv://userdb:abc123.@clustergalaxy.hdklzaq.mongodb.net/?retryWrites=true&w=majority';
const dbName = 'galaxy';
let db;

// Conectar a MongoDB
async function connectToDatabase() {
    try {
        const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        db = client.db(dbName);
        console.log('Connected to database');
        // Redirige a /gamestart.html después de la conexión exitosa
        app.get('/gamestart', (req, res) => {
            res.sendFile(path.join(__dirname, 'gamestart.html'));
        });
    } catch (error) {
        console.error('Error connecting to database:', error);
        process.exit(1); // Exit if unable to connect to the database
    }
}

// Llama a la función de conexión cuando la aplicación se inicia
connectToDatabase();

// Habilita CORS
app.use(cors());

// Ruta raíz para verificar que la aplicación está funcionando
router.get('/', (req, res) => {
    res.send('App is running..');
});

// Define otras rutas
router.get('/systems', async (req, res) => {
    try {
        if (!db) throw new Error('Database not initialized');
        const collection = db.collection('system');
        const systems = await collection.find({}).toArray();
        res.json(systems);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

router.get('/planets/solar-cluster', async (req, res) => {
    try {
        if (!db) throw new Error('Database not initialized');
        const collection = db.collection('planet');
        const planets = await collection.find({ system: 'solar-cluster' }).toArray();
        res.json(planets);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

router.get('/planets/trebia-cluster', async (req, res) => {
    try {
        if (!db) throw new Error('Database not initialized');
        const collection = db.collection('planet');
        const planets = await collection.find({ system: 'trebia-cluster' }).toArray();
        res.json(planets);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

router.get('/planets/citadel-cluster', async (req, res) => {
    try {
        if (!db) throw new Error('Database not initialized');
        const collection = db.collection('planet');
        const planets = await collection.find({ system: 'citadel-cluster' }).toArray();
        res.json(planets);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// Usar el router en la ruta de funciones de Netlify
app.use('/.netlify/functions/server', router);

// Exportar la aplicación como una función serverless
module.exports.handler = serverless(app);
