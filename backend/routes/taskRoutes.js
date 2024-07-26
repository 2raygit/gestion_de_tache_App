const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.get('/', taskController.getTasks); // Route pour obtenir toutes les tâches
router.get('/:id', taskController.getTaskById); // Route pour obtenir une tâche par ID
router.post('/', taskController.createTask); // Route pour créer une nouvelle tâche
router.delete('/:id', taskController.deleteTask); // Route pour supprimer une tâche par ID
router.put('/:id', taskController.updateTask); // Route pour mettre à jour une tâche par ID

module.exports = router;
