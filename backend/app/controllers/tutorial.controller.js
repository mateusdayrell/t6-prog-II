const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = async(req, res) => {
    try {
        const tutorial = await Tutorial.create(req.body);
        return res.json(tutorial);
    } catch (error) {
        console.log(error);
        return res.json(['ERROR']);
    }
};

// Retrieve all Tutorials from the database.
exports.findAll = async(req, res) => {
    try {
        const tutorials = await Tutorial.findAll();
        return res.json(tutorials);
    } catch (error) {
        console.log(error);
        return res.json(['ERROR']);
    }
};

// Find a single Tutorial with an id
exports.findOne = async (req, res) => {
    try {
        const { id } = req.params;
        const tutorial = await Tutorial.FindOne(id);
        return res.json(tutorial);
    } catch (error) {
        console.log(error);
        return res.json(['ERROR']);
    }
};

// Update a Tutorial by the id in the request
exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const tutorial = await Tutorial.findByPk(id);
        const tutorialEditado = await tutorial.update(req.body);
        return res.json(tutorialEditado);
    } catch (error) {
        console.log(error);
        return res.json(['ERROR']);
    }
};

// Delete a Tutorial with the specified id in the request
exports.delete = async(req, res) => {
    try {
        const { id } = req.params;
        const tutorial = await Tutorial.findByPk(id);
        await tutorial.destroy();
        return res.json(tutorial);
    } catch (error) {
        console.log(error);
        return res.json(['ERROR']);
    }
};

// Delete all Tutorials from the database.
exports.deleteAll = async(req, res) => {
    try {
        await Tutorial.deleteAll();
        return res.json(null);
    } catch (error) {
        console.log(error);
        return res.json(['ERROR']);
    }
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};