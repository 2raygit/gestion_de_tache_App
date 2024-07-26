const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    tache: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('TaskModel', TaskSchema);
