const service = require('../services/taskServices');

const getAllTasks = async (_req, res) => {
  const data = await service.getAllTasks();

  if (data.err) {
    return res.status(data.status).json(data);
  }

  return res.status(data.status).json(data.results);
};

const insertTask = async (req, res) => {
  const {
    author, title, description, status,
  } = req.body;

  const data = await service.insertTask(author, title, description, status);
  return res.status(data.status).json(data);
};

const editTask = async (req, res) => {
  const { id } = req.params;
  const {
    author, title, description, status,
  } = req.body;

  const data = await service.editTask(id, author, title, description, status);
  return res.status(data.status).json(data);
};

const deleteTask = async (req, res) => {
  const { id } = req.params;

  const data = await service.deleteTask(id);
  return res.status(data.status).json(data);
};

module.exports = {
  getAllTasks,
  insertTask,
  editTask,
  deleteTask,
};
