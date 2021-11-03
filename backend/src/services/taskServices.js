const model = require('../models/taskModel');

const emptyData = () => ({
  err: true,
  status: 204,
  message: 'Empty data',
});

const returnData = (data) => ({
  err: false,
  status: 200,
  message: 'Success',
  results: data,
});

const getAllTasks = async () => {
  const data = await model.getAllTasks();
  if (data.length === 0) {
    return emptyData();
  }
  return returnData();
};

module.exports = {
  getAllTasks,
};
