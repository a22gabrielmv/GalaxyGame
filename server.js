const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const app = express();
const port = 3000;

const serverless = require("serverless-http");
const router = express.Router();

app.use("/.netlify/functions/app", router);
module.exports.handler = serverless(app);

router.get("/", (req, res) => {
    res.send("App is running..");
});

// Habilita CORS
app.use(cors());

// Configura la conexión a MongoDB Atlas
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
        process.exit(1); // Salir si no se puede conectar a la base de datos
    });

// Endpoint para obtener los sistemas estelares
app.get('/systems', (req, res) => {
    const collection = db.collection('system');
    collection.find({}).toArray()
        .then(systems => res.json(systems))
        .catch(error => res.status(500).send(error));
});

// Endpoint para obtener los planetas del sistema 'solar-cluster'
app.get('/planets/solar-cluster', (req, res) => {
    const collection = db.collection('planet');
    collection.find({ system: 'solar-cluster' }).toArray()
        .then(planets => res.json(planets))
        .catch(error => res.status(500).send(error));
});


// Endpoint para obtener los planetas del sistema 'trebia-cluster'
app.get('/planets/trebia-cluster', (req, res) => {
    const collection = db.collection('planet');
    collection.find({ system: 'trebia-cluster' }).toArray()
        .then(planets => res.json(planets))
        .catch(error => res.status(500).send(error));
});

// Endpoint para obtener los planetas del sistema 'citadel-cluster'
app.get('/planets/citadel-cluster', (req, res) => {
    const collection = db.collection('planet');
    collection.find({ system: 'citadel-cluster' }).toArray()
        .then(planets => res.json(planets))
        .catch(error => res.status(500).send(error));
});

// Endpoint para cargar la pagina de inicio
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'gamestart.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
