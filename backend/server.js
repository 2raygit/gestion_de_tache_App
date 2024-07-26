const express = require('express'); // Importation du module Express pour créer le serveur.
const mongoose = require('mongoose'); // Importation de Mongoose pour interagir avec MongoDB.
const cors = require('cors'); // Importation de CORS pour permettre les requêtes cross-origin.
const taskRoutes = require('./routes/taskRoutes');

const app = express(); // Création d'une instance de l'application Express.
app.use(cors()); // Utilisation du middleware CORS pour permettre les requêtes provenant d'autres domaines.
app.use(express.json()); // Utilisation du middleware pour analyser les requêtes JSON.

mongoose.connect("mongodb+srv://cheikhoutoure:nEpasoublier858@cluster0.twgi1uj.mongodb.net/todolist")
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Failed to connect to MongoDB", err)); 
  
  app.use('/tasks', taskRoutes);

app.listen(3001, () => {
    console.log("Server is Running on port 3001");
  });
  