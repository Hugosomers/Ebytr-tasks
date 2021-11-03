const model = require('../models/taskModel');

const emptyData = () => ({
  err: true,
  status: 200,
  message: 'Empty data',
});

const returnData = (data, message, status) => ({
  status,
  message,
  results: data,
});

const getAllTasks = async () => {
  const data = await model.getAllTasks();
  if (data.length === 0) {
    return emptyData();
  }
  return returnData(data, 'Success', 200);
};

const insertTask = async (author, title, description, status) => {
  const data = await model.insertTask(author, title, description, status);
  return returnData({ id: data.insertedId }, 'Created', 201);
};

module.exports = {
  getAllTasks,
  insertTask,
};
