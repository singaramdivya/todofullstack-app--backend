const ToDoModel = require('../models/ToDoModel');

module.exports.getToDo = async (req, res) => {
    try {
        const toDoList = await ToDoModel.find();
        res.status(200).json(toDoList);
    } catch (error) {
        console.error('Error fetching todos:', error);
        res.status(500).json({ error: 'Failed to fetch todos' });
    }
};

module.exports.saveToDo = async (req, res) => {
    const { text } = req.body;

    try {
        const newToDo = await ToDoModel.create({ text });
        console.log("Added Successfully");
        console.log(newToDo);
        res.status(201).json(newToDo);
    } catch (error) {
        console.error('Error saving todo:', error);
        res.status(500).json({ error: 'Failed to save todo' });
    }
};

module.exports.updateToDo = async (req, res) => {
    const { _id, text } = req.body;
    
    try {
        await ToDoModel.findByIdAndUpdate(_id, { text });
        res.status(200).json({ message: "Updated successfully" });
    } catch (error) {
        console.error('Error updating todo:', error);
        res.status(500).json({ error: 'Failed to update todo' });
    }
};

module.exports.deleteToDo = async (req, res) => {
    const { _id } = req.body;
    
    try {
        await ToDoModel.findByIdAndDelete(_id);
        res.status(200).json({ message: "Deleted successfully" });
    } catch (error) {
        console.error('Error deleting todo:', error);
        res.status(500).json({ error: 'Failed to delete todo' });
    }
};
