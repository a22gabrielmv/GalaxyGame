/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'galaxy';
const collection = 'system';
const collection2 = 'planet';

use(database);

db.createCollection(collection);

db.system.insertMany([
    {
        name: 'Sol Cluster',
        top: 750,
        left: 730,
        id: 'sol-cluster'
    },
    {
        name: 'Serpent Nebula',
        top: 450,
        left: 765,
        id: 'citadel-cluster'
    },
    {
        name: 'Trebia Cluster',
        top: 800,
        left: 500,
        id: 'trebia-cluster'
    }
]);


db.createCollection(collection2);


const planets = [
    {
        id: 0,
        name: 'Mercury',
        distance: 80,
        angle: 0,
        radius: 8,
        texture: 'img/sol/mercury.png',
        speed: 0.0046875,
        elementZero: 0,
        iridium: 0,
        platinum: 0,
        palladium: 0,
        system: 'solar-cluster'
    },
    {
        id: 1,
        name: 'Venus',
        distance: 140,
        angle: Math.PI / 4,
        radius: 12,
        texture: 'img/sol/venus.png',
        speed: 0.00375,
        elementZero: 0,
        iridium: 0,
        platinum: 0,
        palladium: 0,
        system: 'solar-cluster'
    },
    {
        id: 2,
        name: 'Earth',
        distance: 190,
        angle: Math.PI / 2,
        radius: 12,
        texture: 'img/sol/earth.jpg',
        speed: 0.0028125,
        elementZero: 0,
        iridium: 0,
        platinum: 0,
        palladium: 0,
        system: 'solar-cluster'
    },
    {
        id: 3,
        name: 'Mars',
        distance: 240,
        angle: (3 * Math.PI) / 4,
        radius: 10,
        texture: 'img/sol/mars.png',
        speed: 0.0021875,
        elementZero: 0,
        iridium: 0,
        platinum: 0,
        palladium: 0,
        system: 'solar-cluster'
    },
    {
        id: 4,
        name: 'Jupiter',
        distance: 300,
        angle: Math.PI,
        radius: 25,
        texture: 'img/sol/jupiter.png',
        speed: 0.001171875,
        elementZero: 0,
        iridium: 0,
        platinum: 0,
        palladium: 0,
        system: 'solar-cluster'
    },
    {
        id: 5,
        name: 'Saturn',
        distance: 370,
        angle: (5 * Math.PI) / 4,
        radius: 24,
        texture: 'img/sol/saturn.webp',
        speed: 0.00087890625,
        elementZero: 0,
        iridium: 0,
        platinum: 0,
        palladium: 0,
        system: 'solar-cluster'
    },
    {
        id: 6,
        name: 'Uranus',
        distance: 420,
        angle: (3 * Math.PI) / 2,
        radius: 18,
        texture: 'img/sol/uranus.png',
        speed: 0.0005859375,
        elementZero: 0,
        iridium: 0,
        platinum: 0,
        palladium: 0,
        system: 'solar-cluster'
    },
    {
        id: 7,
        name: 'Neptune',
        distance: 480,
        angle: (7 * Math.PI) / 4,
        radius: 18,
        texture: 'img/sol/neptune.png',
        speed: 0.00029296875,
        elementZero: 0,
        iridium: 0,
        platinum: 0,
        palladium: 0,
        system: 'solar-cluster'
    },
    {
        id: 8,
        name: 'Moon',
        distance: 210,
        angle: Math.PI / 2,
        radius: 6,
        texture: 'img/sol/moon.png',
        speed: 0.0028125,
        elementZero: 0,
        iridium: 0,
        platinum: 0,
        palladium: 0,
        system: 'solar-cluster'
    },
    {
        id: 9,
        name: 'Mass Relay',
        distance: 700,
        angle: 25,
        radius: 60,
        width: 100,
        texture: 'img/relay.png',
        speed: 0,
        system: ['solar-cluster', 'trebia-cluster', 'citadel-cluster']
    },
    {
        id: 10,
        name: 'Citadel',
        distance: 250,
        angle: 0,
        radius: 70,
        texture: 'img/serpent/citadel.webp',
        speed: 0,
        elementZero: 0,
        iridium: 0,
        platinum: 0,
        palladium: 0,
        system: 'citadel-cluster'
    },
    {
        id: 11,
        name: 'Aventen',
        distance: 58,
        angle: Math.PI,
        radius: 8,
        texture: 'img/trebia/aventen.png',
        speed: 0.00087890625,
        elementZero: 0,
        iridium: 0,
        platinum: 0,
        palladium: 0,
        system: 'trebia-cluster'
    },
    {
        id: 12,
        name: 'Caelax',
        distance: 140,
        angle: 3,
        radius: 12,
        texture: 'img/trebia/caelax.png',
        speed: 0.00375,
        elementZero: 0,
        iridium: 0,
        platinum: 0,
        palladium: 0,
        system: 'trebia-cluster'
    },
    {
        id: 13,
        name: 'Palaven',
        distance: 190,
        angle: 2,
        radius: 12,
        texture: 'img/trebia/palaven.png',
        speed: 0.0028125,
        elementZero: 0,
        iridium: 0,
        platinum: 0,
        palladium: 0,
        system: 'trebia-cluster'
    },
    {
        id: 14,
        name: 'Menae',
        distance: 210,
        angle: 2,
        radius: 6,
        texture: 'img/trebia/menae.png',
        speed: 0.0028125,
        elementZero: 0,
        iridium: 0,
        platinum: 0,
        palladium: 0,
        system: 'trebia-cluster'
    },
    {
        id: 15,
        name: 'Impera',
        distance: 240,
        angle: 2 * 3,
        radius: 10,
        texture: 'img/trebia/impera.png',
        speed: 0.0021875,
        elementZero: 0,
        iridium: 0,
        platinum: 0,
        palladium: 0,
        system: 'trebia-cluster'
    },
    {
        id: 16,
        name: 'Essenus',
        distance: 300,
        angle: 5 * 6,
        radius: 25,
        texture: 'img/trebia/essenus.png',
        speed: 0.001171875,
        elementZero: 0,
        iridium: 0,
        platinum: 0,
        palladium: 0,
        system: 'trebia-cluster'
    },
    {
        id: 17,
        name: 'Datriux',
        distance: 420,
        angle: 4 * 3,
        radius: 18,
        texture: 'img/trebia/datriux.png',
        speed: 0.0005859375,
        elementZero: 0,
        iridium: 0,
        platinum: 0,
        palladium: 0,
        system: 'trebia-cluster'
    }
];


planets.forEach(planet => {
    if (planet.name !== 'Mass Relay' || planet.name !== 'Citadel') {
        planet.totalResources = planet.elementZero + planet.iridium + planet.platinum + planet.palladium;
    }
    db.planet.insertOne(planet);
});