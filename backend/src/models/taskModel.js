const connection = require('./connection');

const getAllTasks = async () => {
  const data = await connection()
    .then((db) => db.collection('tasks').find().toArray());
  return data;
};

module.exports = {
  getAllTasks,
};
