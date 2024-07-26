const TaskModel = require('../model/taskModel');

exports.getTask = (req, res) => {
    TaskModel.find({})
        .then(task => res.json(task))
        .catch(err => res.json(err));
};

exports.getTaskById = (req, res) => {
    const id = req.params.id;
    TaskModel.findById(id)
        .then(task => res.json(task))
        .catch(err => res.json(err));
};

exports.createTask = (req, res) => {
    TaskModel.create(req.body)
        .then(task => res.json(task))
        .catch(err => res.json(err));
};

exports.updateTask = (req, res) => {
    const id = req.params.id;
    TaskModel.findByIdAndUpdate(id, req.body, { new: true })
        .then(task => res.json(task))
        .catch(err => res.json(err));
};

exports.deleteTask = (req, res) => {
    const id = req.params.id;
    TaskModel.findByIdAndDelete(id)
        .then(task => res.json(task))
        .catch(err => res.json(err));
};
