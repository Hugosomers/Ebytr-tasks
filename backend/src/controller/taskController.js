const service = require('../services/taskServices');

const getAllTasks = async (_req, res) => {
  const data = await service.getAllTasks();

  if (data.err) {
    return res.status(data.status).json(data);
  }

  return res.status(data.status).json(data.results);
};

module.exports = {
  getAllTasks,
};
