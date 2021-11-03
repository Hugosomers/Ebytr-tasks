const connection = require('./connection');

const getAllTasks = async () => {
  const data = await connection()
    .then((db) => db.collection('tasks').find().toArray());
  return data;
};

const insertTask = async (author, title, description, status) => {
  const data = await connection()
    .then((db) => db.collection('tasks').insertOne({
      author, title, description, status,
    }));

  return data;
};

module.exports = {
  getAllTasks,
  insertTask,
};
